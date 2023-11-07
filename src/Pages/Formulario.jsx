import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Formulario() {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="ID">
          <Form.Label>id_produtograndemarca</Form.Label>
          <Form.Control type="text" placeholder="id produto grande marca" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Descricao">
          <Form.Label>Descrição</Form.Label>
          <Form.Control type="text" placeholder="Descrição" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Marca">
          <Form.Label>Marca</Form.Label>
          <Form.Control type="text" placeholder="Marca" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Data fabricacao">
          <Form.Label>Data fabricação</Form.Label>
          <Form.Control type="text" placeholder="Data fabricação" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicQuantidadeestoque">
          <Form.Label>Quantidade estoque</Form.Label>
          <Form.Control type="text" placeholder="Quantidade estoque" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
export default Formulario;
