Footer = React.createClass({
    render(){
        return(
            <div id="footer">
                <p className="hidden-xs">
                    2013 TheBrain by TheBrain Software House <span className="font-grey-4">|</span>
                    Contact us at info@thebrain.pro <span className="font-grey-4">|</span> <a
                    href="#">Policy</a>
                    <span className="font-grey-4">|</span> <a href="#" target="_blank">TheBrain.Pro
                    Blog</a>
                </p>
                <p className="visible-xs">
                    TheBrain by <a href="#">TheBrain Software House</a>
                </p>
                <a href="#" className="gototop"><i className="fa fa-arrow-up"></i></a>
            </div>
        )
    }
});