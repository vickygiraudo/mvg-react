const Footer = () => {
    return(
        <div className="container-fluid">
            <div className="row my-5 ">
               
               <div className="col-4"><a href=""><img src="img/instagramlogo.jpg" alt="logo instagram" width={40} /></a></div> 
               <div className="col-4"><a href=""><img src="img/maillogo.jpg" alt="mail logo" width={40}/></a></div>
               <div className="col-4"><a href=""><img src="img/whatsapplogo.jpg" alt="mail logo" width={40}/></a></div>
               
            </div>
            <div className="row">
                <h3 className="col-12 color_footer">All content Copyright © 2023 MVG PH</h3>
            </div>

        </div>
    )
}

export default Footer;