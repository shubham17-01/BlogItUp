import './contact.css'

export default function Contact() {
    return (
        <div className = "contact">
            <div className = "contactTitle">Contact Us</div>
            <div className = "contactItems">
                <div className = "imageTop"
                ><img
                    src="./images/shubham.jpeg"
                    alt=""
                    />
                </div>
                <div className = "contactTop">                
                <span>Shubham Prabhu <br></br> email id: prabhu.sk@somaiya.edu</span>
                </div>
                <div className = "imageCenter"
                ><img
                    src="./images/mayank.jpeg"
                    alt=""
                    />
                </div>
                <div className = "contactCenter">                
                <span>Mayank Chopra <br></br> email id: prabhu.sk@somaiya.edu</span>
                </div>
                <div className = "imageBottom"
                ><img
                    src="./images/ebrahim.jpeg"
                    alt=""
                    />
                </div>
                <div className = "contactBottom">                
                <span>Ebrahim Malkapurwala <br></br> email id: prabhu.sk@somaiya.edu</span>
                </div>
            </div>
            
        </div>
    )
}
