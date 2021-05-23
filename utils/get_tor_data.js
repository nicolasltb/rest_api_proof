/**
 * Module to Web Scrap the Tor data from the external urls.
 * @author Nicolas Lopes <nicolasltb123@gmail.com>
 */
import fetch from 'node-fetch';
import jsdom from "jsdom";
const { JSDOM } = jsdom;

/**
 * Function to fetch the json data and filter the IP addresses
 * @return {Array} - Return an array of Tor IP addresses
 */
async function get_tor_relay_ips() {
    const url = "https://onionoo.torproject.org/summary?limit=5000";
    const tor_relay_ips = [];
    const regex = /^([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3})/

    const response = await fetch(url).then(url => url.json())
        .catch(e => {
            console.log("Error acessing website " + e);
        });

    response.relays.forEach((element) => {
        if (element.a[0].match(regex)) {
            tor_relay_ips.push(element.a[0]);
        }
    })

    return tor_relay_ips;
}

/**
 * Function to fetch the Web Site data and find the list of IP addresses with regex
 * @return {Array} - Return an array of Tor IP addresses
 */
async function get_tor_node_ips() {
    const url = "https://www.dan.me.uk/tornodes";
    const tor_node_ips = [];
    const regex = /(\d{1,3}\.){3}\d{1,3}/g;

    const response = await fetch(url).then(url => url.text())
        .catch(e => {
            console.log("Error acessing website" + e);
        });

    const dom = new JSDOM(response);
    const articleBox = dom.window.document.querySelector('.article');
    let result = articleBox.textContent.match(regex);

    if (result != null) {
        for (let i = 0; i < result.length; i++) {
            if (!result[i].startsWith('0')) {
                tor_node_ips.push(result[i]);
            }
        }
    }

    return tor_node_ips;
}

export { get_tor_relay_ips, get_tor_node_ips };