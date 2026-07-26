class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        const unique = new Set();
        for(let email of emails){
            let [local,domain]=email.split('@');
            local = local.split('+')[0];
            local=local.replace(/\./g,'');
            unique.add(`${local}@${domain}`);
        }
        return unique.size;
    }
}
