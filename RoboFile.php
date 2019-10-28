<?php
define( "SRC" , __DIR__ . '/src' );

class RoboFile extends \Robo\Tasks
{
    /**
     * git commit
     */
    public function git( $m = 'update' )
    {
        $this->_exec("git add . && git commit -m '" . $m . "' && git push -u origin master");
    }

    /**
     * 创建一个新的页面 快捷
     */
    public function ns( $name = null )
    {
        return $this->newScreen( $name );
    }

    /**
     * 创建一个新的组件 快捷
     */
    public function nc( $name = null )
    {
        return $this->newComponent( $name );
    }

    
    /**
     * 创建一个新的页面
     */
    public function newScreen( $name = null )
    {
        return $this->copy_template( $name , 'screen' );
    }

    /**
     * 创建一个新的组件
     */
    public function newComponent( $name = null )
    {
        return $this->copy_template( $name , 'component' );
    }

    private function copy_template( $name , $type = 'component' )
    {
        
        $type = basename( $type );
        if( $type != 'component' ) $type = 'screen';
        
        if( $name === null ) $name =$this->ask("请输入组件名称");
        if( strlen( $name ) < 1 )
        {
            $this->say("错误组件的名称");
            return false;
        } 

        $file_path = SRC . '/' . $type . '/'. ucfirst( $name ) . '.js';

        if( file_exists( $file_path ) )
        {
            $this->say("组件已存在");
            return false;
        }
        
        $file_tmp = SRC .'/_template/'. $type .'.js';
        if( !file_exists( $file_tmp ) )
        {
            $this->say("模板文件 $file_tmp 不存在");
            return false;
        }

        $content = file_get_contents( $file_tmp );
        $content = str_replace( 'ClassNamePlaceHolder' ,  ucfirst( $name ) , $content);

        file_put_contents( $file_path , $content );
        
        if( $type == 'component' ) $path = '..';
        else $path = '.';
        $this->_exec(" echo \"import " . $name . " from '" . $path . "/" . $type . "/" . $name . "'; \" | pbcopy");

        $this->say( "组件初始化完成，import 语句已经复制到剪贴板" );

    }
}