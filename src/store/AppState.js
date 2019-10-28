import { observable } from "mobx";

class AppState
{
    @observable appname = "EasyStarter";    
}

export default new AppState();