import React from 'react';
import PreviewGrid from "./Components/PreviewGrid";
import SideBar from "./Components/SideBar";
import Footer from "./Components/Footer";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1><b>The header</b> went for a walk. It'll be back soon.</h1>
            </header>
            <main>
                <aside>
                    <SideBar className="sidebar"/>
                </aside>
                <section>
                    <p className={"grid-title"}>Grid for a nice quick phone preview.</p>
                    <PreviewGrid/>
                    <p className={"grid-desc"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ducimus
                        eaque enim modi nemo qui quia ratione. Id iste odit possimus recusandae voluptatibus. A ab
                        accusamus adipisci, aut blanditiis, consectetur dolor dolores doloribus earum eligendi eos esse
                        fuga id in inventore itaque laborum laudantium natus pariatur possimus praesentium qui
                        repudiandae soluta suscipit tempore veniam veritatis voluptates? Atque beatae, consectetur cum
                        dolore eum inventore libero modi molestiae neque odit, quos ratione sit soluta velit vero.
                        Accusantium autem commodi dolorem dolores earum error ipsum itaque magnam molestias mollitia,
                        nesciunt perferendis quae quia quibusdam quisquam quod repellat saepe sequi, sint soluta tempore
                        ullam?</p>
                </section>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
