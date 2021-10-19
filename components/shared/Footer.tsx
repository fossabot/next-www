import React from 'react';

type Props = {};

class FooterComponent extends React.PureComponent<Props> {
    render(): JSX.Element {
        return (
            <footer>
                <section className="top-section">
                    <div className="container">
                        <div className="d-flex flex-row">
                            <img src="/images/news-letter.png" alt="News Letter" />
                            <div className="subscribe-newsletter">
                                <h3 className="title">Subscribe to our newsletter</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iure ea, autem dolores, nostrum in sequi a necessitatibus deserunt vel repudiandae dolor voluptas odit, ipsa dolorum ipsum error voluptatem dignissimos.</p>
                                <div className="d-flex">
                                    <input type="text" name="" id="" placeholder="Enter your email address..." className="form-control" />
                                    <button className="btn btn-dark">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="bottom-section">
                    <div className="container">
                        <div className="d-flex">
                            <img src="https://via.placeholder.com/200" alt="Logo" />
                            <div className="helpful-links flex-grow-1">
                                <div className="d-flex">
                                    <div className="__section">
                                        <h4 className="title">Links</h4>
                                        <ul>
                                            <li>
                                                <a href="/">Home</a>
                                            </li>                                            
                                            <li>
                                                <a href="/contact">Contact</a>
                                            </li>
                                            <li>
                                                <a href="/about">About</a>
                                            </li>
                                            <li>
                                                <a href="/launch-letter">Launch Letter</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="__section">
                                        <h4 className="title">Community</h4>
                                        <ul>
                                            <li>
                                                <a href="/join">Join</a>
                                            </li>
                                            <li>
                                                <a href="/code-of-conduct">Code of Conduct</a>
                                            </li>
                                            <li>
                                                <a href="/legal/privacy-policy">Privacy Policy</a>
                                            </li>
                                            <li>
                                                <a href="/legal/terms-of-service">Terms of Service</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <p className="copyright">
                            © 2021 Bob the coder. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default FooterComponent;
