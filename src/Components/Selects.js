import React, { useState } from 'react';
import Styles from '../Styles/Home.module.css';
import { CARGOSADM, CARGOSINFRA, CARGOSOP, CARGOSRH,CARGOSM, CARGOSD, CARGOSV, CARGOSTI, CARGOSCARGOS} from './Beneficios';
import $ from 'jquery';

function Selects() {
    const [setor, setSetor] = useState("SETOR");

    return (
        <div className={Styles.selects}>
            <select onChange={(e) => setSetor(e.target.value)} value={setor}>
                <option value="SETOR">SETOR</option>
                <option value="RH">RECURSOS HUMANOS</option>
                <option value="OP">OPERACIONAL</option>
                <option value="ADM">ADMINISTRATIVO</option>
                <option value="TI">TECNOLOGIA</option>
                <option value="INFRA">INFRAESTRUTURA</option>
                <option value="D">DIREÇÃO</option>
                <option value="M">MARKETING</option>
                <option value="V">VENDAS</option>
            </select>

            {setor === "SETOR" && <Cargo />}
            {setor === "RH" && <RH />}
            {setor === "OP" && <OP />}
            {setor === "ADM" && <ADM />}
            {setor === "TI" && <TI />}
            {setor === "INFRA" && <INFRA />}
            {setor === "D" && <D />}
            {setor === "M" && <M />}
            {setor === "V" && <V />}

        </div>
    );
}

function Cargo() {

    const [Cargo, setCargo] = useState("CARGO");

    return (
        <div className={Styles.selects}>
            <select onChange={(e) => setCargo(e.target.value)} value={Cargo}>
                <option value="CARGO">CARGO</option>
            </select>

        </div>

    );

}

function RH() {

    const [Cargo, setCargo] = useState("CARGO");
    
    return (
        <div className={Styles.selects}>
            <select onChange={(e) => setCargo(e.target.value)} value={Cargo}>
                <option value="CARGO">CARGO</option>
                <option value="GERENTE">GERENTE</option>
                <option value="ANALISTA">ANALISTA</option>
                <option value="ASSISTENTE">ASSISTENTE</option>
                <option value="JOVEMAPRENDIZ">JOVEM APRENDIZ</option>
            </select>

            {Cargo !== "CARGO" ? <CARGOSRH /> : <CARGOSCARGOS />}
            
        </div>

    );
}

function OP() {

    const [Cargo, setCargo] = useState("CARGO");
    
    return (
        <div className={Styles.selects}>
            <select onChange={(e) => setCargo(e.target.value)} value={Cargo}>
                <option value="CARGO">CARGO</option>
                <option value="SUPERVISOR">SUPERVISOR</option>
                <option value="TECNICO">TÉCNICO</option>
                <option value="LOGISTICA">LOGÍSTICA</option>
                <option value="JOVEMAPRENDIZ">JOVEM APRENDIZ</option>
            </select>

            {Cargo !== "CARGO" ? <CARGOSOP /> : <CARGOSCARGOS />}

        </div>

    );
}

function ADM() {

    const [Cargo, setCargo] = useState("CARGO");
    
    return (
        <div className={Styles.selects}>
            <select onChange={(e) => setCargo(e.target.value)} value={Cargo}>
                <option value="CARGO">CARGO</option>
                <option value="ANALISTA">ANALISTA</option>
                <option value="ASSISTENTE">ASSISTENTE</option>
                <option value="AUXILIAR">AUXILIAR</option>
                <option value="JOVEMAPRENDIZ">JOVEM APRENDIZ</option>
            </select>

            {Cargo !== "CARGO" ? <CARGOSADM /> : <CARGOSCARGOS />}

        </div>
    );
}

function TI() {

    const [Cargo, setCargo] = useState("CARGO");
    
    return (
        <div className={Styles.selects}>
            <select onChange={(e) => setCargo(e.target.value)} value={Cargo}>
            <option value="CARGO">CARGO</option>
                <option value="COORDENADOR">COORDENADOR</option>
                <option value="DESENVOLVEDOR">DESENVOLVEDOR</option>
                <option value="ANALISTA">ANALISTA</option>
                <option value="JOVEMAPRENDIZ">JOVEM APRENDIZ</option>
            </select>

            {Cargo !== "CARGO" ? <CARGOSTI /> : <CARGOSCARGOS />}

        </div>
    );
}

function INFRA() {

    const [Cargo, setCargo] = useState("CARGO");
    
    return (
        <div className={Styles.selects}>
            <select onChange={(e) => setCargo(e.target.value)} value={Cargo}>
                <option value="CARGO">CARGO</option>
                <option value="COORDENADOR">COORDENADOR</option>
                <option value="ARQUITETO">ARQUITETO</option>
                <option value="ANALISTA">ANALISTA</option>
                <option value="JOVEMAPRENDIZ">JOVEM APRENDIZ</option>
            </select>

            {Cargo !== "CARGO" ? <CARGOSINFRA /> : <CARGOSCARGOS />}

        </div>
    );



}

function D() {

    const [Cargo, setCargo] = useState("CARGO");
    
    return (
        <div className={Styles.selects}>
            <select onChange={(e) => setCargo(e.target.value)} value={Cargo}>
                <option value="CARGO">CARGO</option>
                <option value="CEO">CEO</option>
                <option value="DIRETOR">DIRETOR</option>
                <option value="ASSISTENTEPESSOAL">ASSISTENTE PESSOAL</option>
            </select>

            {Cargo !== "CARGO" ? <CARGOSD /> : <CARGOSCARGOS />}

        </div>
    );
}

function M() {

    const [Cargo, setCargo] = useState("CARGO");
    
    return (
        <div className={Styles.selects}>
            <select onChange={(e) => setCargo(e.target.value)} value={Cargo}>
                <option value="CARGO">CARGO</option>
                <option value="GERENTE">GERENTE</option>
                <option value="ANALISTA">ANALISTA</option>
                <option value="ASSISTENTE">ASSISTENTE</option>
            </select>

            {Cargo !== "CARGO" ? <CARGOSM /> : <CARGOSCARGOS />}

        </div>
    );
}

function V() {

    const [Cargo, setCargo] = useState("CARGO");
    
    return (
        <div className={Styles.selects}>
            <select onChange={(e) => setCargo(e.target.value)} value={Cargo}>
                <option value="CARGO">CARGO</option>
                <option value="GERENTE">GERENTE</option>
                <option value="VENDEDOR">VENDEDOR</option>
                <option value="SUPORTE">SUPORTE</option>
            </select>

            {Cargo !== "CARGO" ? <CARGOSV /> : <CARGOSCARGOS />}

        </div>
    );

}

export default Selects;
