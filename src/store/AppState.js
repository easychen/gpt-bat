import { observable } from "mobx";
import api2d from 'api2d';
import sha256 from 'crypto-js/sha256';

const APP_VAR_PREFIX = "GPTBAT_";

class AppState
{
    @observable appname = "GPT::BAT";    
    @observable split_type = "newline";    
    @observable split_length = 1000;    
    @observable split_char = '\\n---\\n';  

    @observable system_prompt = "Please help me to translate the following text to Chinese. Please return only translated content not include the origin text.";    
    @observable user_prompt = "Here is the text: {$content}";    
    @observable max_tokens = 1000;    
    @observable upload_tokens_count = 0;    
    @observable model = "gpt-3.5-turbo"; 
    @observable lists = []; 


    @observable openai_key = ""; 
    @observable openai_api_url = "https://api.openai.com"; 

    

    to_save_vars = ["openai_key","openai_api_url"];

    @observable menu = [
        {"id":8001,"text":"首页","link":"/home","member_only":false},
        // {"id":8002,"text":"试用列表","link":"/install/list","member_only":false},
        // {"id":8003,"text":"我的应用","link":"/myinstances","member_only":true},
        // {"id":8004,"text":"管理应用","link":"/appadmin/list","member_only":true,"admin_only":true},

    ];
    
    constructor()
    {
        this.load_vars();
    }

    load_vars()
    {
        this.to_save_vars.forEach( v =>
        {
            const ret = window.localStorage.getItem(APP_VAR_PREFIX+v);
            if( ret ) this[v] = JSON.parse( ret );
        });
    }

    save_vars( field = null )
    {
        const vars_array = field === null ? this.to_save_vars : [field];
        vars_array.forEach( v =>
        {
            window.localStorage.setItem(APP_VAR_PREFIX+v, JSON.stringify( this[v] ));
        });
    }
    
    async get_token_count(text)
    {
        // use fetch to get token count
        // https://service-qodt7tt0-1256183612.gz.apigw.tencentcs.com/release/countTokens
        // payload { key, text }
        
        const ret = await fetch( "https://service-qodt7tt0-1256183612.gz.apigw.tencentcs.com/release/countTokens", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                key: "1243r4d#s2",
                text
            })
        });
        const json = await ret.json();
        console.log( "json", json );
        if( json && json.count )
        {
            return json.count;
        }
        else
        {
            return 0;
        }
    }

    async do_process( text, user_prompt = null, system_prompt = null, model = null, max_tokens = null )
    {
        // sha256
        const args_string = text + '|' + user_prompt + '|' + system_prompt + '|' + model + '|' + max_tokens;
        const args_sha256 = sha256( args_string ).toString();

        // 检查 localStorage 里是否有缓存
        const cache = window.localStorage.getItem( "cache-"+args_sha256 );
        if( cache )
        {
            return cache;
        }else
        {
            const api2d_instance = new api2d( this.openai_key.trim() );
            api2d_instance.setApiBaseUrl(this.openai_api_url.trim());

            const ret =  await api2d_instance.completion( {
                messages: [
                    {
                        "content": system_prompt || this.system_prompt,
                        "role": "system"
                    },
                    {
                        "content": user_prompt.replace("{$content}", text) || this.user_prompt.replace("{$content}", text),
                        "role": "user"
                    }
                ],
                model: model || this.model,
                max_tokens: max_tokens || this.max_tokens,
            });
            
            if( ret )
            {
                // save to cache
                window.localStorage.setItem( "cache-"+args_sha256, ret.choices[0]?.message?.content.trim() );

                return ret.choices[0]?.message?.content.trim();
            }else
            {
                return "";
            }
        }
    }
    
}

export default new AppState();