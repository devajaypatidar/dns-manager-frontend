import React from 'react';
import GetDNS from '../components/dns/GetDNS';
import CreateDNSRecord from '../components/dns/CreateOne';
import DeleteDNSRecord from '../components/dns/Delete';
import UpdateDNSRecord from '../components/dns/UpdateDNS';
import CreateMultipleDNSRecords from '../components/dns/CreateMultiple'

function DNS(){
    return (
        <div> 
        <GetDNS></GetDNS>
        <CreateDNSRecord></CreateDNSRecord>
        <DeleteDNSRecord></DeleteDNSRecord>
        <UpdateDNSRecord></UpdateDNSRecord>
        <CreateMultipleDNSRecords></CreateMultipleDNSRecords>
        </div>
    )
}

export default DNS ;