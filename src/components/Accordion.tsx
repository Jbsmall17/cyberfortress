import { Accordion } from 'react-bootstrap';

export default function accordion() {
  return (
    <div className='accordion-container'>
      <Accordion defaultActiveKey='0'>
        <Accordion.Item eventKey="0">
            <Accordion.Header>
                    What is cyberfortress? 1
            </Accordion.Header>
            <Accordion.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit illum ullam enim ex sequi omnis earum provident facilis nisi quidem voluptatibus quia nostrum facere labore minima error quibusdam doloremque delectus veritatis a id, maxime eaque. Laborum saepe qui officia? Reprehenderit!
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>
                    What is cyberfortress? 2
            </Accordion.Header>
            <Accordion.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit illum ullam enim ex sequi omnis earum provident facilis nisi quidem voluptatibus quia nostrum facere labore minima error quibusdam doloremque delectus veritatis a id, maxime eaque. Laborum saepe qui officia? Reprehenderit!
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>
                    What is cyberfortress? 3
            </Accordion.Header>
            <Accordion.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit illum ullam enim ex sequi omnis earum provident facilis nisi quidem voluptatibus quia nostrum facere labore minima error quibusdam doloremque delectus veritatis a id, maxime eaque. Laborum saepe qui officia? Reprehenderit!
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
            <Accordion.Header>
                    What is cyberfortress? 4
            </Accordion.Header>
            <Accordion.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit illum ullam enim ex sequi omnis earum provident facilis nisi quidem voluptatibus quia nostrum facere labore minima error quibusdam doloremque delectus veritatis a id, maxime eaque. Laborum saepe qui officia? Reprehenderit!
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
            <Accordion.Header>
                    What is cyberfortress? 5
            </Accordion.Header>
            <Accordion.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit illum ullam enim ex sequi omnis earum provident facilis nisi quidem voluptatibus quia nostrum facere labore minima error quibusdam doloremque delectus veritatis a id, maxime eaque. Laborum saepe qui officia? Reprehenderit!
            </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}
