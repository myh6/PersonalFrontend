import '../../BaseStyle.css';
import FrostedGlass from '../FrostedGlass/FrostedGlass';
import './SmallIntro.css';

function SmallIntro() {
    return (
        <div className="smallIntro-container">
            <FrostedGlass>
                <h2>A LITTL INTRODUCTION</h2>
                <p>
                    Hi there! I'm from <strong>Taipei, Taiwan</strong>. I started my journey by self-learning
                    iOS development and the Swift programming language, and ever since, I’ve been captivated by
                    the world of programming. 🧑‍💻
                </p>
                <p>
                    I excel in <strong>iOS mobile development</strong>, creating user-friendly and efficient
                    applications. My expertise includes working with native iOS technologies, designing intuitive
                    UI/UX, and delivering high-quality, testable apps.
                </p>
                <p>
                    My field of interest includes <strong>developing robust mobile applications</strong>,
                    exploring the possibilities of cross-platform frameworks, and staying up-to-date with the
                    latest advancements in Apple’s ecosystem.
                </p>
                <p>
                    Whenever possible, I apply my passion for programming to build innovative products using
                    modern development methodologies, focusing on scalability and clean architecture.
                </p>
            </FrostedGlass>
        </div>
    );
}

export default SmallIntro;