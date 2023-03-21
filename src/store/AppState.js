import { observable } from "mobx";
import api2d from 'api2d';
import sha256 from 'crypto-js/sha256';
import { toast } from "../util/Function";

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

    i18n = {
        "zh": {
            "subtitle":"GPT长文本处理程序",
            "split_type":"分隔方式",
            "split_by_line":"按换行分隔",
            "split_by_length":"按长度分隔",
            "split_by_char":"按特殊字符分隔",
            "split_length":"分隔长度",
            "split_char":"分隔符，支持正则",
            "system_prompt":"System 提示词",
            "user_prompt":"User 提示词",
            "model":"模型",
            "upload_file":"选择文件",
            "begin_process":"开始处理",
            "segment":"段",
            "about":"约",
            "key_settings_title":"设置OpenAI/ Forward Key",
            "key_settings_key":"请输入OpenAI/Forward KEY: sk-xxx/fkxxx",
            "key_settings_url":"请输入API地址，如无需代理可留空",
            "key_settings_apply":"申请Forward Key · 可微信充值",
        },
        "en": {
            "subtitle": "Batch Processing for GPT",
            "split_type": "Split Type",
            "split_by_line": "Split by Line",
            "split_by_length": "Split by Length",
            "split_by_char": "Split by Special Character",
            "split_length": "Split Length",
            "split_char": "Split Character, supports regex",
            "system_prompt": "System Prompt",
            "user_prompt": "User Prompt",
            "model": "Model",
            "upload_file": "Select File",
            "begin_process": "Process",
            "segment": "Segments",
            "about": "About",
            "key_settings_title": "Set OpenAI/Forward Key",
            "key_settings_key": "Please enter OpenAI/Forward KEY: sk-xxx/fkxxx",
            "key_settings_url": "Please enter API address, leave blank if no proxy is needed",
            "key_settings_apply": "Apply for Forward Key · WeChat recharge available"
        }
    };


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