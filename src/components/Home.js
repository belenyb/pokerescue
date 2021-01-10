import React from 'react';
import '../App.css'
import ItemListContainerPOKE from '../containers/ItemListContainerPOKE';

const Home = (props) => {
    return (
        <div className="App">
            <header className="App-header">
                <section className="nes-container is-dark">
                    <section className="message-list">
                        <section className="message-left">
                            <i className="nes-ash"></i>
                            <div className="nes-balloon from-left is-dark">
                                <p>{props.greeting}</p>
                            </div>
                        </section>
                    </section>
                </section>
                <ItemListContainerPOKE />
            </header>
        </div>
    );
}

export default Home;
