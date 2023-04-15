
import { Modal } from "@mantine/core";
import React from "react";
import { Badge, Card } from "react-bootstrap";
import LoadingSpinner from "../spinner/LoadingSpinner";
import qrCode from '../../assets/images/qr-code.png'
{/* <img src={qrCode.src} alt="QR code" width="300px"/> */}

export const Popup = ({ id, name, opened, setOpened }) => {
  
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Proceed to book your order"
        centered
      >
                <Card className="pokemon-card pokemon-modal-card" >
                
                  <Card.Body>
                    <Card.Title>
                      <span className="pokemon-number mx-2">Call : 9754045753</span>
                    </Card.Title>
                  </Card.Body>
                </Card>
      </Modal>
    </>
  );
};
