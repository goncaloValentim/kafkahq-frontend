import React from 'react';
import Form from '../../common/form/form';
import Joi from 'joi-browser';
import Header from "../../common/header";

class TopicCreate extends Form {
    state = {
        formData: {
            name: '',
            partition: 1,
            replication: 1,
            cleanup: 'delete',
            retention: 86400000
        },
        errors: {}
    };

    schema = {
        name: Joi.string().required().label('Name'),
        partition: Joi.number().min(1).label('Partition').required(),
        replication: Joi.number().min(1).label('Replication').required(),
        cleanup: Joi.string().required(),
        retention: Joi.number().label('Retention')
    };

    onCleanupChange = value => {
        let {formData} = {...this.state};
        formData.cleanup = value;

        this.setState({formData});
    };

    doSubmit = () => {
        const {formData} = this.state;
        const {clusterId} = this.props;
        const topic = {}; // || topicService.getTopic(clusterId, topicId)

        topic.name = formData.name;
        topic.partition = formData.partition;
        topic.replication = formData.replication;
        topic.cleanup = formData.cleanup;
        topic.retention = formData.retention;

        // topicService.saveTopic(clusterId)
    };

    render() {
        return (
            <div id="content">
                <form encType="multipart/form-data" className="khq-form khq-form-config" onSubmit={this.handleSubmit}>
                    <Header title="Create a topic"/>
                    {this.renderInput('name', 'Name', 'Name')}
                    {this.renderInput('partition', 'Partition', 'Partition', 'number')}
                    {this.renderInput('replication', 'Replicator Factor', 'Replicator Factor', 'number')}
                    {this.renderRadioGroup('cleanup', 'Cleanup Policy', [
                        'Delete',
                        'Compact',
                        'Delete and Compact'
                    ], this.onCleanupChange)}
                    {this.renderInput('retention', 'Retention', 'Retention', 'number')}

                    {this.renderButton('Create')}
                </form>
            </div>
        );
    }
}

export default TopicCreate;