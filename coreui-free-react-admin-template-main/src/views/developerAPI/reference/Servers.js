import React from 'react'
import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CButton,
} from '@coreui/react'

const Servers = () => {
  return (
    <>
      <CAccordion>
        <CAccordionItem itemKey={5}>
          <CAccordionHeader>
            <h4>EdiFact</h4>
          </CAccordionHeader>
          <CAccordionBody>
            <CAccordion>
              <CAccordionItem itemKey={1}>
                <CAccordionHeader>
                  <CButton color="success" size="sm" disabled>
                    POST
                  </CButton>
                  &nbsp; <strong> /edifact/read</strong>&nbsp;&nbsp;Convert EDIFACT files to JSON
                </CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={2}>
                <CAccordionHeader>
                  <CButton color="success" size="sm" disabled>
                    POST
                  </CButton>
                  &nbsp; <strong> /edifact/write</strong>&nbsp;&nbsp;Convert JSON to EDIFACT files
                </CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={3}>
                <CAccordionHeader>
                  <CButton color="success" size="sm" disabled>
                    POST
                  </CButton>
                  &nbsp; <strong> /edifact/validate</strong>&nbsp;&nbsp;Validate EDIFACT messages
                </CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={4}>
                <CAccordionHeader>
                  <CButton color="success" size="sm" disabled>
                    POST
                  </CButton>
                  &nbsp; <strong> /edifact/ack</strong>&nbsp;&nbsp;Generate EDIFACT acknowledments
                </CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
            </CAccordion>
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={2}>
          <CAccordionHeader>
            <h4>EdiModel</h4>
          </CAccordionHeader>
          <CAccordionBody>
            <CAccordion>
              <CAccordionItem itemKey={1}>
                <CAccordionHeader>
                  <CButton color="success" size="sm" disabled>
                    POST
                  </CButton>
                  &nbsp;<strong> /models</strong>&nbsp;&nbsp;Upload EDI models in either SEF or
                  OpenEDI format
                </CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={2}>
                <CAccordionHeader>
                  <CButton color="info" size="sm" disabled>
                    GET
                  </CButton>
                  &nbsp; <strong> /models</strong>&nbsp;&nbsp;Retrieve the names of all EDI models
                </CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={3}>
                <CAccordionHeader>
                  <CButton color="info" size="sm" disabled>
                    GET
                  </CButton>
                  &nbsp;
                  <strong> /models/{'{id}'} </strong>
                  &nbsp;&nbsp; Retrieve an EDI model
                </CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={4}>
                <CAccordionHeader>
                  <CButton color="danger" size="sm" disabled>
                    DELETE
                  </CButton>
                  &nbsp;
                  <strong> /models/{'{id}'} </strong>
                  &nbsp;&nbsp; Delete an EDI model
                </CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
            </CAccordion>
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={3}>
          <CAccordionHeader>
            <h4>Hl7</h4>
          </CAccordionHeader>
          <CAccordionBody>
            <CAccordion>
              <CAccordionItem itemKey={1}>
                <CAccordionHeader>
                  <CButton color="success" size="sm" disabled>
                    POST
                  </CButton>
                  &nbsp; <strong> /hl7/read</strong>&nbsp;&nbsp; Convert HL7 files to JSON
                </CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={2}>
                <CAccordionHeader>
                  <CButton color="success" size="sm" disabled>
                    POST
                  </CButton>
                  &nbsp; <strong> /hl7/write</strong>&nbsp;&nbsp; Convert JSON to HL7 files
                </CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={3}>
                <CAccordionHeader>
                  <CButton color="success" size="sm" disabled>
                    POST
                  </CButton>
                  &nbsp; <strong> /hl7/validate</strong>&nbsp;&nbsp; Validate HL7 messages
                </CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
            </CAccordion>
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={4}>
          <CAccordionHeader>
            <h4>Ncpdp</h4>
          </CAccordionHeader>
          <CAccordionBody>
            <CAccordion>
              <CAccordionItem itemKey={1}>
                <CAccordionHeader>
                  <CButton color="success" size="sm" disabled>
                    POST
                  </CButton>
                  &nbsp; <strong> /ncpdp/read</strong>&nbsp;&nbsp; Convert NCPDP files to JSON
                </CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={2}>
                <CAccordionHeader>
                  <CButton color="success" size="sm" disabled>
                    POST
                  </CButton>
                  &nbsp; <strong> /ncpdp/write</strong>&nbsp;&nbsp; Convert JSON to NCPDP files
                </CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={3}>
                <CAccordionHeader>
                  <CButton color="success" size="sm" disabled>
                    POST
                  </CButton>
                  &nbsp; <strong> /ncpdp/validate</strong>&nbsp;&nbsp; Validate NCPDP messages
                </CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
            </CAccordion>
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={5}>
          <CAccordionHeader>
            <h4>Vda</h4>
          </CAccordionHeader>
          <CAccordionBody>
            <CAccordionItem itemKey={1}>
              <CAccordionHeader>
                <CButton color="success" size="sm" disabled>
                  POST
                </CButton>
                &nbsp; <strong> /vda/read</strong>&nbsp;&nbsp; Convert VDA files to JSON
              </CAccordionHeader>
              <CAccordionBody></CAccordionBody>
            </CAccordionItem>
            <CAccordionItem itemKey={2}>
              <CAccordionHeader>
                <CButton color="success" size="sm" disabled>
                  POST
                </CButton>
                &nbsp; <strong> /vda/write</strong>&nbsp;&nbsp; Convert JSON to VDA files
              </CAccordionHeader>
              <CAccordionBody></CAccordionBody>
            </CAccordionItem>
            <CAccordionItem itemKey={3}>
              <CAccordionHeader>
                <CButton color="success" size="sm" disabled>
                  POST
                </CButton>
                &nbsp; <strong> /vda/validate</strong>&nbsp;&nbsp; Validate VDA messages
              </CAccordionHeader>
              <CAccordionBody></CAccordionBody>
            </CAccordionItem>
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={6}>
          <CAccordionHeader>
            <h4>X12</h4>
          </CAccordionHeader>
          <CAccordionBody>
            <CAccordionItem itemKey={1}>
              <CAccordionHeader>
                <CButton color="success" size="sm" disabled>
                  POST
                </CButton>
                &nbsp; <strong> /x12/read</strong>&nbsp;&nbsp; Convert X12 files to JSON
              </CAccordionHeader>
              <CAccordionBody></CAccordionBody>
            </CAccordionItem>
            <CAccordionItem itemKey={2}>
              <CAccordionHeader>
                <CButton color="success" size="sm" disabled>
                  POST
                </CButton>
                &nbsp; <strong> /x12/write</strong>&nbsp;&nbsp; Convert JSON to X12 files
              </CAccordionHeader>
              <CAccordionBody></CAccordionBody>
            </CAccordionItem>
            <CAccordionItem itemKey={3}>
              <CAccordionHeader>
                <CButton color="success" size="sm" disabled>
                  POST
                </CButton>
                &nbsp; <strong> /x12/validate</strong>&nbsp;&nbsp; Validate X12 messages
              </CAccordionHeader>
              <CAccordionBody></CAccordionBody>
            </CAccordionItem>
            <CAccordionItem itemKey={4}>
              <CAccordionHeader>
                <CButton color="success" size="sm" disabled>
                  POST
                </CButton>
                &nbsp; <strong> /x12/ack</strong>&nbsp;&nbsp; Generate X12 acknowledments
              </CAccordionHeader>
              <CAccordionBody></CAccordionBody>
            </CAccordionItem>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      &nbsp;&nbsp;
      <CAccordion>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Schemas</CAccordionHeader>
          <CAccordionBody>
            <CAccordion>
              <CAccordionItem itemKey={1}>
                <CAccordionHeader>BHS</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={2}>
                <CAccordionHeader>BTS</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={3}>
                <CAccordionHeader>BatchReceivingApplication</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={4}>
                <CAccordionHeader>BatchReceivingFacility</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={5}>
                <CAccordionHeader>BatchReceivingNetworkAddress</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={6}>
                <CAccordionHeader>BatchSendingApplication</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={7}>
                <CAccordionHeader>BatchSendingFacility</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={8}>
                <CAccordionHeader>BatchSendingNetworkAddress</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={9}>
                <CAccordionHeader>EdiModel</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={10}>
                <CAccordionHeader>EdifactGroup</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={11}>
                <CAccordionHeader>EdifactInterchange</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={12}>
                <CAccordionHeader>ErrorDetails</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={13}>
                <CAccordionHeader>FHS</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={14}>
                <CAccordionHeader>FTS</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={15}>
                <CAccordionHeader>FileReceivingApplication</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={16}>
                <CAccordionHeader>FileReceivingFacility</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={17}>
                <CAccordionHeader>FileReceivingNetworkAddress</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={18}>
                <CAccordionHeader>FileSendingApplication</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={19}>
                <CAccordionHeader>FileSendingFacility</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={20}>
                <CAccordionHeader>FileSendingNetworkAddress</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={21}>
                <CAccordionHeader>FlatMessage</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={22}>
                <CAccordionHeader>GE</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={23}>
                <CAccordionHeader>GS</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={24}>
                <CAccordionHeader>HI7Group</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={25}>
                <CAccordionHeader>HI7Interchange</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={26}>
                <CAccordionHeader>IEA</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={27}>
                <CAccordionHeader>ISA</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={28}>
                <CAccordionHeader>Link</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={29}>
                <CAccordionHeader>NcpdpTransmission</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={30}>
                <CAccordionHeader>OperationDetail</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={31}>
                <CAccordionHeader>OperationResult</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={32}>
                <CAccordionHeader>S001</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={33}>
                <CAccordionHeader>S002</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={34}>
                <CAccordionHeader>S003</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={35}>
                <CAccordionHeader>S004</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={36}>
                <CAccordionHeader>S005</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={37}>
                <CAccordionHeader>S006</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={38}>
                <CAccordionHeader>S007</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={39}>
                <CAccordionHeader>S008</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={40}>
                <CAccordionHeader>TA1</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={41}>
                <CAccordionHeader>TransmissionHeader</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={42}>
                <CAccordionHeader>TransmissionTrailer</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={43}>
                <CAccordionHeader>UNA</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={44}>
                <CAccordionHeader>UNB</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={45}>
                <CAccordionHeader>UNE</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={46}>
                <CAccordionHeader>UNG</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={47}>
                <CAccordionHeader>UNZ</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={48}>
                <CAccordionHeader>X12Group</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={49}>
                <CAccordionHeader>X12Interchange</CAccordionHeader>
                <CAccordionBody></CAccordionBody>
              </CAccordionItem>
            </CAccordion>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </>
  )
}
export default Servers
