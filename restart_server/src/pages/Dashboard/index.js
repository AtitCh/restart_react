import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import axios from "axios";
import { AuthContext } from "../../App";
import "./style.css";
import Modal from "../../components/Modal";
export const ModalContext = React.createContext();
export const RestartContext = React.createContext();

const Dashboard = () => {
  // ** data server
  const URL = "https://api.btf.co.th/apirestart";
  const DATA = [
    { name: "FB-PC01", ip: "103.195.4.195", server_id: "8c573542-8f69-06dc-16c5-88721dc38c0e", team: "fb" },
    { name: "FB-PC02", ip: "103.195.5.119", server_id: "cc5d3542-2ae2-6fb2-df6e-326990ff31d9", team: "fb" },
    { name: "FB-PC03", ip: "103.195.5.26", server_id: "42358890-946f-8765-1681-9938995030a5", team: "fb" },
    { name: "FB-PC04", ip: "45.126.124.228", server_id: "39c63542-21d1-ab06-11f6-bc53242f1f4a", team: "fb" },
    { name: "FB-PC05", ip: "103.195.4.73", server_id: "9bea3542-8568-493a-99ec-23aadf85d329", team: "fb" },
    { name: "FB-PC06", ip: "103.195.5.121", server_id: "55273542-ab83-e7a5-3a3c-f89441b80d13", team: "fb" },
    { name: "FB-PC07", ip: "103.195.4.50", server_id: "ea763542-4dac-c576-2cc9-83475c4c5476", team: "fb" },
    { name: "FB-PC08", ip: "103.195.5.182", server_id: "564d2c2e-cfb7-a134-1892-c07583e9c426", team: "fb" },
    { name: "FB-PC09", ip: "103.195.6.78", server_id: "0e123542-53bf-3a0e-0145-95880b4e51f6", team: "fb" },
    { name: "FB-PC10", ip: "103.195.7.127", server_id: "b76c3542-7a2b-1deb-bbf7-a37259379754", team: "fb" },
    { name: "FB-PC11", ip: "45.126.124.115", server_id: "11593542-164f-3a76-9f7e-1d7329598dbb", team: "fb" },
    { name: "FB-PCH", ip: "103.195.5.147", server_id: "423522a6-4c25-ff7e-9dcb-fc5eb88b5560", team: "fb" },
    { name: "FB-PCR", ip: "45.126.124.229", server_id: "f72b3542-3346-ed69-2455-26916999b220", team: "fb" },
    { name: "AUTO-PC01", ip: "103.195.4.171", server_id: "9ab43542-79da-6981-ffea-2e97f398564c", team: "au" },
    { name: "AUTO-PC02", ip: "103.195.4.175", server_id: "af713542-47b5-203c-feeb-90d740822951", team: "au" },
    { name: "AUTO-PC03", ip: "103.195.4.213", server_id: "cd143542-cf4f-f547-b078-a65467fadae4", team: "au" },
    { name: "AUTO-PC04", ip: "103.195.4.203", server_id: "069e3542-1f13-1f36-264f-c3d1a75bcc73", team: "au" },
    { name: "AUTO-PC05", ip: "103.195.4.17", server_id: "f6883542-938b-f3b1-62d5-70502502158a", team: "au" },
    { name: "AUTO-PC06", ip: "103.195.6.46", server_id: "56ea3542-53e0-159a-92e9-bb82925f6545", team: "au" },
    { name: "AUTO-PC07", ip: "103.195.6.45", server_id: "164e3542-28c5-568d-436f-63dfb6d1a78d", team: "au" },
    { name: "AUTO-PC08", ip: "103.195.4.174", server_id: "4ba53542-3efd-16e6-eaee-2dd1ad9d4fdc", team: "au" },
    { name: "AUTO-PC09", ip: "103.195.6.64", server_id: "564db160-e55a-63d6-7aa0-15169f4c42be", team: "au" },
    { name: "AUTO-PC10", ip: "103.195.5.156", server_id: "ca9e3542-47a1-5dde-0d5a-201c7abff29d", team: "au" },
    { name: "AUTO-PC11", ip: "45.126.124.115", server_id: "11593542-164f-3a76-9f7e-1d7329598dbb", team: "au" },
    { name: "AUTO-PCH", ip: "103.195.4.89", server_id: "e4713542-5f0a-8c1d-9055-73bcee52268b", team: "au" },
    { name: "AUTO-PCR", ip: "103.195.5.157", server_id: "84613542-c558-cf9a-06b0-8806647d7250", team: "au" },
  ];
  // * data server

  const Auth = React.useContext(AuthContext);
  const [state, setState] = useState({ v: null, i: null });
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    Auth.setAuth(false);
  };

  const btnClick = (v, i) => {
    setState({ v, i });
    setModalVisible(true);
  };

  const CF = () => {
    const btn = document.getElementById(state.i);
    btn.innerText = "Waiting";
    btn.disabled = true;
    setTimeout(() => {
      btn.innerText = "Waiting";
    }, 500);

    let data = JSON.stringify({ server_id: state.v.server_id, team: state.v.team });

    let config = {
      method: "post",
      url: URL,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setTimeout(() => {
          btn.innerText = "Waiting . ";
        }, 1000);
        setTimeout(() => {
          btn.innerText = "Waiting . . ";
        }, 1500);

        setTimeout(() => {
          btn.innerText = "Waiting . . . ";
        }, 2000);
        setTimeout(() => {
          btn.innerText = "Waiting . . . .";
        }, 2500);

        setTimeout(() => {
          btn.innerText = "Success .";
        }, 5000);
      })
      .catch(function (error) {
        console.log(error.message);
        setTimeout(() => {
          btn.innerText = "Waiting . ";
        }, 1000);
        setTimeout(() => {
          btn.innerText = "Waiting . . ";
        }, 1500);

        setTimeout(() => {
          btn.innerText = "Waiting . . . ";
        }, 2000);
        setTimeout(() => {
          btn.innerText = "Waiting . . . .";
        }, 2500);

        setTimeout(() => {
          btn.innerText = "Failed .";
        }, 4000);
      });

    setTimeout(() => {
      btn.disabled = false;
      btn.innerText = `Restart ${state.v.name}`;
    }, 10000);
  };

  return (
    <ModalContext.Provider value={{ modalVisible, setModalVisible }}>
      <RestartContext.Provider value={{ state, CF }}>
        {modalVisible && <Modal />}
        <div>
          <div className="container">
            <div className="logo">
              <img src={logo} className="logo-login" alt="" />
              <button onClick={handleLogout}>Logout</button>
            </div>
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>PC Name</th>
                    <th>IP Addr</th>
                    <th>Restart</th>
                  </tr>
                </thead>
                <tbody>
                  {DATA.map((v, i) => {
                    return (
                      <tr key={i}>
                        <td> {`${i + 1}`}</td>
                        <td>{v.name}</td>
                        <td>{v.ip}</td>
                        <td>
                          <button id={i} onClick={(e) => btnClick(v, i)}>
                            {`Restart ${v.name}`}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </RestartContext.Provider>
    </ModalContext.Provider>
  );
};

export default Dashboard;
