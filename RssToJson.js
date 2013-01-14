/*
This will return data in the following format:
{
	"query" : {
		"count" : 2,
		"created" : "2012-10-15T01:07:08Z",
		"lang" : "en-US",
		"results" : {
			"item" : [{
					"title" : "TITLE HERE",
					"description" : "DESCRIPTION HERE",
					"link" : "LINK HERE"
				}, {
					"title" : "TITLE HERE",
					"description" : "DESCRIPTION HERE",
					"link" : "LINK HERE"
				}
			]
		}
	}
}

*/
enyo.kind({
	name: "Spinn.RssToJson",
	kind: enyo.Component,
	events: {
	  onSuccess: "",
	  onFailure: ""
	},
	components: [
		{
			kind: "WebService",
			name: "RSSWebService",
			onSuccess: "RssAnswer",
			onFailure: "RssFail"
		}
	],
	getRss: function(rssUrl) {
		var url = "http://query.yahooapis.com/v1/public/yql?q=select%20link%2C%20title%2C%20description%20from%20rss%20where%20url%3D%22" + rssUrl + "%22&format=json&callback=";
		this.$.RSSWebService.setUrl(url);
        this.$.RSSWebService.call();
	},
	RssAnswer: function (inSender, inResponse) {
		this.doSuccess(inResponse);
    },
	RssFail: function (inSender, inResponse) {
		this.doFailure(inResponse);
	}
});