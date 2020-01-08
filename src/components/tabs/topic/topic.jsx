import React, {Component} from 'react';
import Header from "../../common/header";

// Adaptation of topic.ftl

class Topic extends Component {
    render() {
        return (
            <div id="content">
                <Header title="Topic"/>
                <div className="tabs-container">
                    <ul className="nav nav-tabs" role="tablist">
                        {/*#if roles?seq_contains("topic/data/read")*/}
                        <li className=" nav-item">
                            {/*<a className=" nav-link ${(tab == "data") ? then("active", "")}"*/}
                            <a className="nav-link"
                               href=" #"
                               role=" tab">Data</a>
                        </li>
                        {/*</#if>*/}
                        <li className=" nav-item">
                            {/*<a className=" nav-link ${(tab == " partitions") ? then(" active", "")}"*/}
                            <a className="nav-link"
                               href=" #"
                               role=" tab">Partitions</a>
                        </li>
                        <li className=" nav-item">
                            {/*<a className=" nav-link ${(tab == " groups") ? then(" active", "")}"*/}
                            <a className="nav-link"
                               href=" #"
                               role=" tab">Consumer Groups</a>
                        </li>
                        <li className=" nav-item">
                            {/*<a className=" nav-link ${(tab == " configs") ? then(" active", "")}"*/}
                            <a className="nav-link"
                               href=" #"
                               role=" tab">Configs</a>
                        </li>
                        {/*#if roles?seq_contains(" acls") == true*/}
                        <li className=" nav-item">
                            {/*<a className=" nav-link ${(tab == " acls") ? then(" active", "")}"*/}
                            <a className="nav-link"
                               href=" #"
                               role=" tab">ACLS</a>
                        </li>
                        {/*</#if>*/}
                        <li className=" nav-item">
                            {/*<a className=" nav-link ${(tab == " logs") ? then(" active", "")}"*/}
                            <a className="nav-link"
                               href=" #"
                               role=" tab">Logs</a>
                        </li>
                    </ul>

                    <div className=" tab-content">
                        {/*<#if tab == " data">*/}
                        <div className=" tab-pane active" role=" tabpanel">
                            {/*<#include " blocks/topic/data.ftl" />*/}
                        </div>
                        {/*</#if>*/}

                        {/*<#if tab == " partitions">*/}
                        <div className=" tab-pane active" role=" tabpanel">
                            {/*<#include " blocks/topic/partitions.ftl" />*/}
                        </div>
                        {/*</#if>*/}

                        {/*<#if tab == " groups">*/}
                        <div className=" tab-pane active" role=" tabpanel">
                            {/*<@groupTemplate.table topic.getConsumerGroups() />*/}
                        </div>
                        {/*</#if>*/}

                        {/*<#if tab == " configs">*/}
                        <div className=" tab-pane active" role=" tabpanel">
                            {/*<#include " blocks/configs.ftl" />*/}
                        </div>
                        {/*</#if>*/}

                        {/*#if tab == " acls" && roles?seq_contains(" acls") == true*/}
                        <div className=" tab-pane active" role=" tabpanel">
                            {/*<#assign resourceType=" topic"/>*/}
                            {/*<#include " blocks/resourceTypeAcls.ftl" />*/}
                        </div>
                        {/*</#if>*/}

                        {/*<#if tab == " logs">*/}
                        <div className=" tab-pane active" role=" tabpanel">
                            {/*<@logTemplate.table topic.getLogDir() />*/}
                        </div>
                        {/*</#if>*/}
                    </div>
                </div>
            </div>
        );
    }
}

// <#if tab != " configs" && roles?seq_contains(" topic/data/insert")>
//     <@template.bottom>
//         <a href=" ${basePath}/${clusterId}/tail/?topics= ${topic.getName()}" className=" btn btn-secondary mr-2">
//             <i className=" fa fa-fw fa-level-down" aria-hidden=" true"></i> Live Tail
//         </a>
//
//         <a href=" ${basePath}/${clusterId}/topic/${topic.getName()}/produce" className=" btn btn-primary">
//             <i className=" fa fa-plus" aria-hidden=" true"></i> Produce to topic
//         </a>
//     </@template.bottom>
// </#if>
//         );
//     }
// }

export default Topic;