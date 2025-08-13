import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';

export const TechnicalSpecifications = ({ specsData = [], title = 'Technical Specifications' }) => {
  return (
    <div className='container my-5 border rounded shadow'>
      <div className='p-3 row align-items-center'>
        <div className='mt-3 col-lg-12 col-md-12 col-12'>
          <h4 className='mb-3 text-uppercase'>{title}</h4>
          <Accordion defaultActiveKey='0' flush>
            {specsData.map((section, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{section.title}</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      {section.rows.map((row, idx) => (
                        <tr key={idx}>
                          <td>{row.label}</td>
                          <td>{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};
