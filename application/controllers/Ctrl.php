<?php

class Ctrl extends CI_Controller{
    
    public function __construct()
        {
            parent::__construct();
            $this->load->helper('url_helper');
        }
    
    public function home() {
        $this->load->view('templates/header');
        $this->load->view('accueil');
        $this->load->view('templates/footer');
    }
}
