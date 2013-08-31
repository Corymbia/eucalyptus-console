define([
    'underscore',
    'backbone',
    'sharedtags',
    'autoscalingtags',
    'models/scalinggrps',
	'models/scalinginsts',
	'models/scalingpolicys',
	'models/volumes',
	'models/images',
	'models/launchconfigs',
	'models/instances',
	'models/eips',
	'models/keypairs',
	'models/sgroups',
	'models/snapshots',
	'models/balancers',
	'models/insthealths',
	'models/summarys',
	'models/alarms',
	'models/metrics',
    'models/availabilityzones',
    'models/loadbalancers',
    'models/regions',
	], 
function(_, Backbone, tags, astags) {
    var self = this;
    var sconfs = [
    ['scalinggrp', 'scalinggroup', 'scalingGroup', 'scalingGroups'],
	['scalinginst', 'scalinginsts'],
	['scalingpolicy', 'scalingpolicys'],
	['volume', 'volumes'],
	['image', 'images'],
	['launchconfig', 'launchconfigs', 'launchConfigs'],
	['instance', 'instances'],
	['eip'],
	['keypair', 'keypairs'],
	['sgroup', 'sgroups'],
	['snapshot', 'snapshots'],
	['balancer'],
	['insthealth', 'instHealths'],
	['summary'],
	['alarm', 'alarms'],
	['metrics'],
	['availabilityzone'],
	['loadbalancer', 'loadbalancers'],
    ['regions'],
    ];

    var shared = {};
    var args = arguments;
    var srcs = _.map(_.range(4, args.length), function(n) { 
        return args[n]; 
    });

    _.each(srcs, function(src, index) {
       var clz = srcs[index];
       var obj = new clz();
       _.each(sconfs[index], function(name) {
           shared[name] = obj;
       });
    });

    shared.tags = tags;
    shared.tag = tags;
    shared.astags = astags;

	return shared;
});
