import _ from "lodash";

export const topics = [
    {
        clusterId: 'cluster',
        _id: Date.now(),
        name: 'test',
        partition: 1,
        replication: 1,
        cleanup: 'delete',
        retention: 50
    },
    {
        clusterId: 'cluster',
        _id: Date.now() + 1,
        name: 'test2',
        partition: 1,
        replication: 1,
        cleanup: 'delete',
        retention: 50
    }
];

export function getTopics() {
    return topics;
}

export function getTopic(clusterId, id) {
    return topics.find(t => t.clusterId === clusterId && t._id === id);
}

export function saveTopic(topic) {
    let savedTopic = getTopic(topic.clusterId, topic._id) || {};
    savedTopic.clusterId = topic.clusterId;
    savedTopic.name = topic.name;
    savedTopic.partition = topic.partition;
    savedTopic.replication = topic.replication;
    savedTopic.cleanup = topic.cleanup;
    savedTopic.retention = topic.retention;

    if (!savedTopic._id) {
        savedTopic._id = Date.now();
        topics.push(savedTopic)
    }

    return savedTopic;
}

export function deleteTopic(clusterId, id) {
    let savedTopic = getTopic(clusterId, id);
    topics.splice(topics.indexOf(savedTopic), 1);
    return topics;
}