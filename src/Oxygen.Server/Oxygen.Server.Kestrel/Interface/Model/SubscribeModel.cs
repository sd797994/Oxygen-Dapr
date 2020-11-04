using System;
using System.Collections.Generic;
using System.Text;

namespace Oxygen.Server.Kestrel.Interface.Model
{
    internal class SubscribeModel
    {
        public SubscribeModel(string pubsubname,string topic,string route)
        {
            this.pubsubname = pubsubname;
            this.topic = topic;
            this.route = route;
        }
        public string pubsubname { get; set; }
        public string topic { get; set; }
        public string route { get; set; }
    }
}
