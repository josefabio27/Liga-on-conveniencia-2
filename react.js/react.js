import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       Fale conosco
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">whatssapp</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Facebook</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Telegram</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;