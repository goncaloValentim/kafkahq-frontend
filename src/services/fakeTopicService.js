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

export function getTopicByName(clusterId, name) {
    return topics.find(t => t.clusterId === clusterId && t.name === name);
}

export function saveTopic(topic) {
    let savedTopic = getTopicByName(topic.clusterId, topic.name) || {};

    if (typeof savedTopic._id !== "undefined") {
        return {
            error: {
                title: `Failed to create topic '${topic.name}'`,
                message: `Topic '${topic.name}' already exists.`
            }
        };
    }

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

export function deleteTopic(clusterId, name) {
    let savedTopic = getTopicByName(clusterId, name);
    console.log(savedTopic);
    console.log(topics.indexOf(savedTopic));
    topics.splice(topics.indexOf(savedTopic), 1);
    return topics;
}