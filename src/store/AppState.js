import { observable } from "mobx";

class AppState
{
    @observable appname = "EasyStarter";    
    @observable split_type = "newline";    
    @observable split_length = 1000;    
    @observable split_char = '\\n---\\n';  

    @observable system_prompt = "你是一个资深翻译家，你的工作是把英文翻译成中文。";    
    @observable user_prompt = "英文如下：{$content}";    
    @observable max_tokens = 1000;    
    @observable model = "gpt-3.5-turbo";    
    
}

export default new AppState();