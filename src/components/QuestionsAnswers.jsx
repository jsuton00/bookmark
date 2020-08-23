import React, { useState } from 'react';
import { Accordion, Card, useAccordionToggle } from 'react-bootstrap';
import { MoreInfoButton, ToggleButton } from './Buttons';

export default function QuestionsAnswers(props) {
  const { eventKey } = props;
  const [iconButton, setIconButton] = useState(false);

  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    setIconButton(!iconButton),
  );

  return (
    <>
      <Accordion id="faq-list" className="faq-list" onSelect={decoratedOnClick}>
        <Card className="faq-card">
          <Accordion.Toggle
            as={Card.Header}
            eventKey="0"
            className="faq-question row"
          >
            What is Bookmark?
            <ToggleButton toggle={iconButton && 'vertical'} />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0" className="faq-answers">
            <Card.Body className="faq-answers-body">
              <Card.Text className="faq-answers-text row">
                Ut esse adipisicing ut sunt non. Cillum dolor laborum id mollit
                ad Lorem culpa officia aliqua est culpa. Sunt sunt exercitation
                cillum esse commodo fugiat commodo aliqua incididunt sunt Lorem
                eu id.
              </Card.Text>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="faq-card">
          <Accordion.Toggle
            as={Card.Header}
            eventKey="1"
            className="faq-question row"
          >
            How can I request a new browser?
            <ToggleButton toggle={iconButton && 'vertical'} />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1" className="faq-answers">
            <Card.Body className="faq-answers-body">
              <Card.Text className="faq-answers-text row">
                Quis culpa est voluptate esse aliqua incididunt id culpa veniam
                laborum pariatur cillum sit irure. Irure aute Lorem veniam est
                pariatur occaecat. Occaecat ad eu cillum excepteur sint magna
                incididunt qui officia anim eiusmod. Dolore exercitation minim
                eu cupidatat laboris.
              </Card.Text>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="faq-card">
          <Accordion.Toggle
            as={Card.Header}
            eventKey="2"
            className="faq-question row"
          >
            Is there a mobile app?
            <ToggleButton toggle={iconButton && 'vertical'} />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2" className="faq-answers">
            <Card.Body>
              <Card.Text>
                Consequat nostrud cupidatat aute anim qui in consequat laborum
                mollit amet id duis cupidatat. In et anim duis dolore laboris
                nostrud anim eu nulla nisi. Laborum fugiat sunt deserunt ipsum
                minim qui dolor laboris quis. Incididunt cillum minim nulla
                labore aliquip ex Lorem ea cupidatat anim duis.
              </Card.Text>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="faq-card">
          <Accordion.Toggle
            as={Card.Header}
            eventKey="3"
            className="faq-question row"
          >
            What about other Chromium browsers?
            <ToggleButton toggle={iconButton && 'vertical'} />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3" className="faq-answers">
            <Card.Body className="faq-answers-body">
              <Card.Text className="faq-answers-text row">
                Dolor aliqua incididunt commodo commodo ut ullamco qui fugiat
                excepteur eiusmod occaecat. Occaecat occaecat tempor ipsum ut
                magna non consectetur quis laboris. Aute labore amet officia
                minim aliqua veniam. Velit sint amet in esse reprehenderit minim
                esse eu cupidatat exercitation sit consequat fugiat sint. Tempor
                enim dolor veniam proident in elit. Excepteur ipsum esse velit
                quis in dolor occaecat.
              </Card.Text>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <div id="more-info-button" className="more-info-button-row row">
        <MoreInfoButton />
      </div>
    </>
  );
}
