import React, { Component } from 'react';
import { FaInstagramSquare } from 'react-icons/fa';
import './style.css';
import Modal from "./modal.js";

class Chefs extends Component {
    state = {
        modalIsOpen: false,
        secondModalIsOpen: false,
        thirdModalIsOpen: false,
        fourthModalIsOpen: false,
        fifthModalIsOpen: false
    };

    //first modal function
    openModal = () => {
        this.setState({ modalIsOpen: true });
    };

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    };

    //second modal function
    openSecondModal = () => {
        this.setState({ secondModalIsOpen: true });
    };

    closeSecondModal = () => {
        this.setState({ secondModalIsOpen: false });
    };

    //third modal function
    openThirdModal = () => {
        this.setState({ thirdModalIsOpen: true });
    };

    closeThirdModal = () => {
        this.setState({ thirdModalIsOpen: false });
    };

    //fourth modal function
    openFourthModal = () => {
        this.setState({ fourthModalIsOpen: true });
    };

    closeFourthModal = () => {
        this.setState({ fourthModalIsOpen: false });
    };

    //open fifth modal
    openFifthModal = () => {
        this.setState({ fifthModalIsOpen: true });
    };

    closeFifthModal = () => {
        this.setState({ fifthModalIsOpen: false });
    };

    render() {
        return (
            <div className="chefsBackground">
                <header className="chefsHeader animate__animated animate__flipInX">
                    Meet our chefs
                </header>
                <hr />
                <p className="chefsInfo">
                    Each of our chefs are known in the culinary world to be both passionate and highly experienced. Click on each chef's photo to learn more about them.
                </p>
                <div className="row chefsContainer">
                    <div className="col">
                        <button className="buttonWrapper" onClick={this.openModal}>
                            <img className="chefsImg" src="https://i.postimg.cc/Wbj6C7xR/DSC-0611.jpg" alt="headshot">
                            </img>
                        </button>
                        <h1 className="chefsName_underImg">
                            Chef Lohelani Hicks
                            </h1>
                    </div>
                    <div className="col">
                        <button className="buttonWrapper" onClick={this.openSecondModal}>
                            <img className="chefsImg" src="https://i.postimg.cc/jSnXx31d/omgchristian.png" alt="headshot">
                            </img>
                        </button>
                        <h1 className="chefsName_underImg">
                            Chef Julian Sgarzi
                            </h1>
                    </div>
                </div>
                <div className="row chefsContainer">
                    <div className="col">
                        <button className="buttonWrapper" onClick={this.openThirdModal}>
                            <img className="chefsImg" src="https://i.postimg.cc/Y0Ttxg9f/Screen-Shot-2021-02-18-at-2-35-41-PM.png" alt="headshot">
                            </img>
                        </button>
                        <h1 className="chefsName_underImg">
                            Chef Vanessa Orellana
                            </h1>
                    </div>
                    <div className="col">
                        <button className="buttonWrapper" onClick={this.openFourthModal}>
                            <img className="chefsImg" src="https://i.postimg.cc/zf01Jf6r/Image-from-i-OS.jpg" alt="headshot">
                            </img>
                        </button>
                        <h1 className="chefsName_underImg">
                            Chef Maxwell Yu
                            </h1>
                    </div>
                </div>
                <div className="row chefsContainer">
                    <div className="col">
                        <button className="buttonWrapper" onClick={this.openFifthModal}>
                            <img className="chefsImg" src="https://i.postimg.cc/HszG0nW7/resizedaaron.png" alt="headshot">
                            </img>
                        </button>
                        <h1 className="chefsName_underImg lastName">
                            Chef Aaron Lu
                            </h1>
                    </div>
                </div>

                <Modal open={this.state.modalIsOpen} onClose={this.closeModal}>
                    <button className="closeBtn" onClick={this.closeModal}>x</button>
                    <div>
                        <h1 className="chefsName">
                            Chef Lohelani Hicks
                        </h1>
                        <p className="chefsBio">
                            Lohelani grew up in Hawaii, with a passion for creativity and passion for food. She has cooked all over Hawaii and the States, including the Michelin-Starred MichaelLiiu. Her creativity and free-spirited soul has helped her become a worldly known chef in the culinary world.
                        </p>
                        <h1 className="chefsIg">
                        <a href="instagram.com">
                            <FaInstagramSquare />
                        </a>
                        </h1>
                    </div>

                </Modal>

                <Modal
                    open={this.state.secondModalIsOpen}
                    onClose={this.closeSecondModal}
                >
                    <button className="closeBtn" onClick={this.closeSecondModal}>x</button>
                    <div>
                        <h1 className="chefsName">
                            Chef Julian Sgarzi
                        </h1>
                        <p className="chefsBio">
                            Julian was originally planning on a career in programming, but fell in love with the food world and has since never looked back. He was the head Chef of Pier 114, which won Best Restaurant in 2019; Julian is now currently a sous chef at torch, where he continues to inspire us daily.
                        </p>
                        <h1 className="chefsIg">
                        <a href="instagram.com">
                            <FaInstagramSquare />
                        </a>
                        </h1>
                    </div>
                </Modal>

                <Modal
                    open={this.state.thirdModalIsOpen}
                    onClose={this.closeThirdModal}
                >
                    <button className="closeBtn" onClick={this.closeThirdModal}>x</button>
                    <div>
                        <h1 className="chefsName">
                            Chef Vanessa Orellana
                        </h1>
                        <p className="chefsBio">
                            Vanessa followed her passion straight from high school, where she then attended The Culinary Institute of America, graduating in 2010. She went on to hone her culinary skills at Porta which currently holds 2 Michelin stars. Vanessa formerly served as the Chef de Cuisine of The Ponse, following three years shadowing world renowned Chef Lujnal.
                        </p>
                        <h1 className="chefsIg">
                        <a href="instagram.com">
                            <FaInstagramSquare />
                        </a>
                        </h1>
                    </div>
                </Modal>

                <Modal
                    open={this.state.fourthModalIsOpen}
                    onClose={this.closeFourthModal}
                >
                    <button className="closeBtn" onClick={this.closeFourthModal}>x</button>
                    <div>
                        <h1 className="chefsName">
                            Chef Maxwell Yu
                        </h1>
                        <p className="chefsBio">
                            Max initially planned to pursue a career as a professional soccer player. However, after training at The Juilliard School, he realized he missed the food and energy of a bustling dining room. Max changed paths and worked his way into kitchens at Cafe Huna (1 Michelin Star), and Rutse Madison (3 Michelin Stars). Max hopes to open his own restaurant where he can showcase the flavors and techniques he grew up with.
                        </p>
                        <h1 className="chefsIg">
                        <a href="instagram.com">
                            <FaInstagramSquare />
                        </a>
                        </h1>
                    </div>
                </Modal>

                <Modal
                    open={this.state.fifthModalIsOpen}
                    onClose={this.closeFifthModal}
                >
                    <button className="closeBtn" onClick={this.closeFifthModal}>x</button>
                    <div>
                        <h1 className="chefsName">
                            Chef Aaron Lu
                        </h1>
                        <p className="chefsBio">
                            Aaron grew up in FortLee, NJ and joins us with eight years of experience from the famous restaurant Kiuyha, a Michelin-Starred restaurant, where he now serves as the Executive Chef. In 2019, Aaron received the StarChefs Rising Star award.
                        </p>
                        <h1 className="chefsIg">
                        <a href="instagram.com">
                            <FaInstagramSquare />
                        </a>
                        </h1>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Chefs;