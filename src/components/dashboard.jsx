import React, {Component} from 'react';
import Sidebar from "./common/sidebar";
import Cluster from "./tabs/cluster";
import Tail from "./tabs/tail";
import Node from "./tabs/node";
import Group from "./tabs/group";
import Acls from "./tabs/acls";
import Connect from "./tabs/connect";
import Schema from "./tabs/schema";
import TopicList from "./tabs/topicList";

class Dashboard extends Component {
    state = {
        clusterId: '',
        selectedTab: 'cluster', //cluster | node | topic | tail | group | acls | schema | connect
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        const clusterId = nextProps.match.params.clusterId;
        const selectedTab = nextProps.match.params.tab;

        return {clusterId: clusterId, selectedTab: selectedTab};
    }

    renderSelectedTab = () => {
        const {selectedTab} = this.state;

        switch (selectedTab) {
            case 'cluster':
                return <Cluster/>;
            case 'node':
                return <Node/>;
            case 'topic':
                return <TopicList/>;
            case 'tail':
                return <Tail/>;
            case 'group':
                return <Group/>;
            case 'acls':
                return <Acls/>;
            case 'schema':
                return <Schema/>;
            case 'connect':
                return <Connect/>;
            default:
                return <Cluster/>;
        }
    };

    render() {
        const {selectedTab, clusterId} = this.state;

        return (
            <React.Fragment>
                <Sidebar
                    selectedTab={selectedTab}
                    clusterId={clusterId}
                />
                {this.renderSelectedTab()}
            </React.Fragment>
        );
    }
}

export default Dashboard;