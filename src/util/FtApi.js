import axios from 'axios';
import { toast } from './Function';

export default class FtApi
{
    constructor( store )
    {
        this.store = store;
    }

    // get 方法不带 token 参数，因为这样不安全
    async get( path , data = null )
    {
        const ds = path.indexOf('?') === -1 ? '?' : '&';
        const url =  data == null ? this.store.apibase + path : this.store.apibase + path + ds + new URLSearchParams( data ).toString(); 
        return this.return_data(await axios.get( url ));
    }

    // post 自动附带 token
    async post( path , data = null, with_token =true, login_alert = true )
    {
        return this.rawPost( this.store.apibase + path , data, with_token, login_alert );
    }

    async rawPost( path , data = null, with_token =true, login_alert = true )
    {
        var params = new URLSearchParams();
        if( data )
            Object.keys( data ).forEach( item => params.append(item, data[item]) );

        if( with_token && this.store.token )
            params.append("token", this.store.token);
        
        return this.return_data(await axios.post( path  , params ) , login_alert );
    }

    async rawJson( url , data = null)
    {
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        return this.return_data(await axios.post( url  , JSON.stringify(data) ));
    }

    async upload( path , data = null, with_token =true, login_alert = true )
    {
        var params = new FormData();
        if( data )
            Object.keys( data ).forEach( item => params.append(item, data[item]) );

        if( with_token && this.store.token )
            params.append("token", this.store.token);
        
        return await this.return_data(await axios.post( this.store.apibase + path  , params ) , login_alert );
    }

    async return_data( ret , alert = true )
    {
        if( parseInt(ret.status) == 200 )
        {
            if( ret.data  )
            {
                if( ret.data.code == 80403 )
                {
                    toast("请登入后继续");
                    window.location = "/login";
                } 
                
                return ret.data;
                    
            }

            return false;
        }
        return false;  
    }
}