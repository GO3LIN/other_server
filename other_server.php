<?php

class other_server extends rcube_plugin
{
    public $task    = 'login|logout';

    /**
     * Plugin initialization
     */
    public function init()
    {
        $this->add_texts('localization/', true);
        $this->include_stylesheet('other_server.css');
        $this->add_hook('authenticate', array($this, 'authenticate'));
        $this->include_script('other_server.js');
    }

    /*
    * Function that overload the authentication process.
    * It checks if the Other option is selected then constructs the host url.
     */

    public function authenticate($d){
        $server = rcube_utils::get_input_value('_host', rcube_utils::INPUT_POST);
        if($server==-1){
            $_url = rcube_utils::get_input_value('_url', rcube_utils::INPUT_POST);
            $_port = rcube_utils::get_input_value('_port', rcube_utils::INPUT_POST);
            $_ssl = rcube_utils::get_input_value('_protocol', rcube_utils::INPUT_POST);
            $ssl = !empty($_ssl) ? $_ssl.'://' : '';
            $d['host'] = $ssl.$_url.':'.$_port;
        }
         return $d;
    }
}
