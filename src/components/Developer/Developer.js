import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import './Developer.css'
import dev1 from "../../img/dev1.png";
import dev2 from "../../img/dev2.png";
import dev3 from "../../img/dev3.png";

function Developer() {
    return (
        <Stack className="developers-section">
            <h2 className="heading_developers">Разработчики</h2>
            <div className="developers">
                <Card className="developer-card">
                    <Card.Img src={dev1} className="developer-photo"/>
                    <Card.Body className="developer-info">
                        <Card.Title className="developer-name">Алексей Бобрик</Card.Title>
                        <a href="https://github.com/alexeibob1" target="_blank" className="button-git">Профиль на GitHub</a>
                    </Card.Body>
                </Card>

                <Card className="developer-card">
                    <Card.Img src={dev2} className="developer-photo"/>
                    <Card.Body className="developer-info">
                        <Card.Title className="developer-name">Протченко Владислав</Card.Title>
                        <a href="https://github.com/freezton" target="_blank" className="button-git">Профиль на GitHub</a>
                    </Card.Body>
                </Card>

                <Card className="developer-card">
                    <Card.Img src={dev3} className="developer-photo"/>
                    <Card.Body className="developer-info">
                        <Card.Title className="developer-name">Нафтольский Станислав</Card.Title>
                        <a href="https://github.com/Ptuxa" target="_blank" className="button-git">Профиль на GitHub</a>
                    </Card.Body>
                </Card>
            </div>

        </Stack>
    );
}


export default Developer;