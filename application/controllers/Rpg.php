<?php

class Rpg extends CI_Controller{
    
    public function __construct() {
        parent::__construct();
        $this->load->helper('url_helper');
    }
    
    public function game() {
        $this->load->view("templates/header");
        $this->load->view("jeux");
        $this->load->view("templates/footer");
    }
}
