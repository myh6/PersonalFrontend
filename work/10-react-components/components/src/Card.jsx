import './Card.css';
import Button from "./Button";

function Card() {
    return (
        <>
            <h1 className='card-title'>Cards</h1>
            <div className="card-collection">
                <div className="card">
                    <h2>Title</h2>
                    <div className="card-content">
                        <p>Lorem, ipsum dolor. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quam!</p>
                        <p>
                            Lorem ipsum dolor <Button visual="link">Subscribe</Button> sit amet.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <h2>Eltit</h2>
                    <div className="card-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus at qui, quidem modi officiis odit itaque exercitationem eaque porro quae quos sit eveniet repudiandae, accusamus, corrupti praesentium consequuntur? Illo, expedita.</p>
                    </div>
                </div>

                <div className="card">
                    <h2>Sdrac</h2>
                    <div className="card-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatibus vero, quis in cum, voluptate odit, consequuntur nam at similique itaque consectetur tempore. Accusantium alias dolorum, doloremque quam quibusdam dolore!</p>
                    </div>
                </div>

                <div className="card">
                    <h2>Egap Ym</h2>
                    <div className="card-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum rem ea dicta quaerat voluptas a voluptatem magnam magni laudantium ab dolore officia tenetur natus veniam, totam repudiandae eos ullam!</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;