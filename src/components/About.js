import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'
import Iframe from 'react-iframe';
import portfolioImage from '../images/portfolio.jpg'

class About extends Component {

    render() {
        return (
            <div>
                <div className="">
                    <div class="row">
                        <div class="col" style={{ paddingLeft: "0px" }}>
                            <h1 class="display-3 cursive mb-0">Damely Tineo</h1>
                            <h2 class="display-6 color-green" style={{ fontWeight: "300" }}>Software Engineer</h2>
                            <p class="lead text-muted">
                                Problem Solver. Diversity, Equity, and Inclusion Advocate. Creator of things.
                                <br />

                                To learn more about me, you can email me at <a href="mailto:damely.tineo07@gmail.com?subject=Connecting via Portfolio" className="text-muted" style={{ textDecoration: 'underline' }}>damely.tineo07@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>


            </div>

        )
    }
}

export default About;