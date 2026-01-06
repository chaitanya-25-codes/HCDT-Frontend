import Layout from "../components/Layout";
import {PatientPanel} from "../components/PatientsPanel";
import { ExplainabilityPanel } from "../components/ExplainabilityPanel";
import {ChatPanel} from "../components/ChatPanel";

export default function Dashboard(){
    return (
        <Layout
        left={<PatientPanel />}
        center={<ChatPanel />}
        right={<ExplainabilityPanel />}
        />
    )
}