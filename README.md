# Roundcube other imap server plugin
A roundcube plugin that gives to the user the possibility to configure the imap server parameters (server address, port, protocol).

# Requirements
This plugin is tested under roundcube version 1.0. To have this plugin working you need to set an array of default hosts.

Example:

$config['default_host'] = array(

	'ssl://imap.gmail.com'=>'Gmail',
	
	'ssl://imap-mail.outlook.com' => 'Outlook (Hotmail)',
	
	'ssl://imap.mail.yahoo.com' => 'Yahoo',
);

# Install
To install this plugin just add his name 'rc_other_server' to the $config['plugins'] array in config.inc.php :

$config['plugins'] = array('rc_other_server', ...);



# Screenshot

![screenshot from 2015-03-25 18 07 25](https://cloud.githubusercontent.com/assets/5892853/6830417/0575f5ea-d2f0-11e4-9579-0473c8567224.png)
