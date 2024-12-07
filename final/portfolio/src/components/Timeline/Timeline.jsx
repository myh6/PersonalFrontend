import '../../BaseStyle.css';
import FrostedGlass from '../FrostedGlass/FrostedGlass';
import './Timeline.css';

function Timeline() {
    const timelineData = [
        {
            year: 'Jan 2025 - May 2025',
            company: 'National Internet Observatory',
            location: 'Boston, MA',
            title: 'iOS Software Engineer Co-op',
            content: ['My next chapter.'],
        },
        {
            year: 'May 2024 - Aug 2024',
            company: 'SHL Medical',
            location: 'Taiwan (Hybrid)',
            title: 'iOS Software Engineer Internship',
            content: [
                'Architected and developed an iOS SDK using the CoreBluetooth framework to facilitate communication with medical devices. Implemented design patterns, enhancing modularity and ensuring testability.',
                'Engineered a robust framework from the ground up using Test-Driven Development (TDD), achieving 96.3% code coverage. Developed over 150 unit and integration tests to ensure the reliability and quality of the framework.',
                'Crafted a SwiftUI application to demonstrate the SDK’s capabilities, integrating modern frameworks such as SwiftData for persistence and Observation for state management, adhering to the MVVM architectural pattern.',
                'Streamlined the development process by integrating SonarCloud for static code analysis and incorporating it into an Azure DevOps CI pipeline, leading to improved code quality and continuous integration practices.',
                'Overcame complex challenges such as abstracting Apple frameworks to achieve loose coupling, designing a clean architecture, and implementing Bluetooth functionality through TDD, which significantly reduced the risk of defects.',
            ],
        },
        {
            year: 'Mar 2022 - Jul 2023',
            company: 'Mercuries Data System Ltd',
            location: 'Taipei, Taiwan',
            title: 'iOS Software Engineer',
            content: [
                'Designed and developed an app using Swift for Cathay United Bank following SOLID principles and clean code architecture, which is currently deployed to over 100+ devices across the country to help customers apply for credit cards and other related services.',
                'Streamlined codebase using MVVM and Combine, slashing compilation time by 30% and significantly improving project agility and developer productivity.',
                'Elevated app efficiency by diagnosing and rectifying memory leaks, alongside optimizing memory allocation with Profile, curtailing memory usage by 20% and boosting performance.',
                'Championed UI/UX and API design innovations, driving architectural enhancements that streamlined project execution and fostered the adoption of industry best practices within our team, significantly enhancing project outcomes and team efficiency.',
            ],
        },
    ];

    return (
        <ul className="timeline">
            {timelineData.map((item, index) => (
                <li key={index} className="timeline-event">
                    <label className="timeline-event-icon"></label>
                    <div className="timeline-event-copy">
                        <FrostedGlass>
                            <p className="timeline-event-thumbnail">{item.year}</p>
                            <h2>{item.company}</h2>
                            <h3>{item.title}</h3>
                            <p>
                                <strong>{item.location}</strong>
                            </p>
                            <ul className="timeline-content">
                                {item.content.map((line, lineIndex) => (
                                    <li key={lineIndex}>{line}</li>
                                ))}
                            </ul>
                        </FrostedGlass>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default Timeline;