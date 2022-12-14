import { Button, Container, Navbar } from "react-bootstrap";


const FastButton = () => {
  return (
    <>
      <div className="d-grid gap-2">
        <Button className="primary" href={'spa/topfilms'} >
          Получить лучшие фильмы
        </Button>{' '}
        <Button className="primary" href={'spa/recomendedfilm'}>
          Фильм по погоде
        </Button>
      </div>
    </>

  );
}

export default FastButton;
