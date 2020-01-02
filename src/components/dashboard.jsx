import React, {Component} from 'react';
import logo from '../images/logo.svg'

class Dashboard extends Component {
    state = {
        roles: [],
        clusters: [],
        tag: 'Snapshot'
    };

    render() {
        const {tag} = this.state;

        return (
            <div className="wrapper">
                <nav id="khq-sidebar">
                    <div className="sidebar-header">
                        <a href="#">
                            <h3 className="logo">
                                <img src={logo} alt=""/>
                                <sup><strong>HQ</strong></sup>
                            </h3>
                        </a>
                        <div className="version">{tag}</div>
                    </div>
                    <ul className="list-unstyled components">
                        {/*if that checks if the selected tab is "cluster"*/}
                        {/*<li className="${(tab == " cluster")?then(" active", "")}">*/}
                        <li>
                            <a href="#clusters"
                               data-toggle="collapse"
                               aria-expanded="false"
                               className="dropdown-toggle">
                                <i
                                    className="fa fa-fw fa fa-database"
                                    aria-hidden="true"
                                />
                                Clusters
                                <span className="badge badge-success">
                                {/*${clusterId}*/}
                            </span>
                            </a>
                            <ul className="collapse list-unstyled" id="clusters">
                                {/*for loop that dis*/}
                                {/*<#list clusters as cluster>*/}
                                <li>
                                    {/*if that checks if a cluster is selected */}
                                    {/*className="${(cluster == clusterId)?then("active", "")}"*/}
                                    <a href="${basePath}/${cluster}"

                                    >
                                        {/*${cluster}*/}
                                    </a>
                                </li>
                                {/*</#list>*/}
                            </ul>
                        </li>
                        {/*<#if roles?seq_contains("node") == true>*/}
                        {/*    <li className="${(tab == "node")?then("active", "")}">*/}
                        <li className="">
                            <a href="${basePath}/${clusterId}/node"><i className="fa fa-fw fa-laptop"
                                                                       aria-hidden="true"></i> Nodes</a>
                        </li>
                        {/*</#if>*/}
                        {/*<#if roles?seq_contains("topic") == true>*/}
                        {/*    <li className="${(tab == "topic")?then("active", "")}">*/}
                        <li className="">
                            {/*<a href="${basePath}/${clusterId}/topic"><i className="fa fa-fw fa-list" aria-hidden="true"></i> Topics</a>*/}
                            <a href="#"><i className="fa fa-fw fa-list" aria-hidden="true"></i> Topics</a>
                        </li>
                        {/*</#if>*/}
                        {/*<#if roles?seq_contains("topic/data") == true>*/}
                        {/*    <li className="${(tab == "tail")?then("active", "")}">*/}
                        <li className="">
                            <a href="${basePath}/${clusterId}/tail"><i className="fa fa-fw fa-level-down"
                                                                       aria-hidden="true"></i> Live Tail</a>
                        </li>
                        {/*</#if>*/}
                        {/*<#if roles?seq_contains("group") == true>*/}
                        {/*    <li className="${(tab == "group")?then("active", "")}">*/}
                        <li className="">
                            <a href="${basePath}/${clusterId}/group"><i className="fa fa-fw fa-object-group"
                                                                        aria-hidden="true"></i> Consumer Groups</a>
                        </li>
                        {/*</#if>*/}
                        {/*<#if roles?seq_contains("acls") == true>*/}
                        {/*    <li className="${(tab == "acls")?then("active", "")}">*/}
                        <li className="">
                            <a href="${basePath}/${clusterId}/acls"><i className="fa fa-fw fa-key"
                                                                       aria-hidden="true"></i> ACLS</a>
                        </li>
                        {/*</#if>*/}
                        {/* <#if registryEnabled?? && registryEnabled == true && roles?seq_contains("registry") == true>*/}
                        {/*    <li className="${(tab == "schema")?then("active", "")}">*/}
                        <li className="">
                            <a href="${basePath}/${clusterId}/schema"><i className="fa fa-fw fa-cogs"
                                                                         aria-hidden="true"></i> Schema Registry</a>
                        </li>
                        {/*</#if>*/}
                        {/*<#if (connectList)??>*/}
                        {/*<#if roles?seq_contains("connect") == true && (connectList?size > 0)>*/}
                        {/*<li class="${(tab == "connect")?then("active", "")}">*/}
                        <li class="">
                            <a href="#connects"
                               data-toggle="collapse"
                               aria-expanded="false"
                               class="dropdown-toggle"><i
                                class="fa fa-fw fa fa-exchange"
                                aria-hidden="true"></i> Connects
                                <span class="badge badge-success">
                                {/*${(connectId??)?then(connectId,"")}*/}
                                    connect-1
                               </span></a>
                            <ul class="collapse list-unstyled" id="connects">
                                {/*<#list connectList as connect>*/}
                                <li>
                                    <a href="${basePath}/${clusterId}/connect/${connect}">
                                        {/*${connect}*/}
                                        connect-1
                                    </a>
                                </li>
                                {/*</#list>*/}
                            </ul>
                        </li>
                        {/*</#if>*/}
                        {/*</#if>*/}
                    </ul>
                    {/*<#if loginEnabled>*/}
                    <div class="sidebar-log">
                        {/*<#if username??>*/}
                        {/*<a href="${basePath}/logout" data-turbolinks="false">*/}
                        {/*    <i class="fa fa-fw fa-sign-out" aria-hidden="true"></i>*/}
                        {/*    ${username} */}
                        {/*    (Logout)*/}
                        {/*</a>*/}
                        {/*<#else>*/}
                        <a href="${basePath}/login" data-turbolinks="false">
                            <i class="fa fa-fw fa-sign-in" aria-hidden="true"></i>
                            Login
                        </a>
                        {/*</#if>*/}
                    {/*</a>*/}
            </div>
    {/*</#if>*/}
    </nav>
    <
        /div>
    )
        ;
    }
}

export default Dashboard;
