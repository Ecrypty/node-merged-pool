node-stratum
============

    Under development

High performance Stratum poolserver in Node.js


Features (mostly untested)
--------------------------
* Daemon interface
* Stratum TCP socket server
* Block template / job manager

#### To do
* Optimized generation transaction building
* Integrate with PostgreSQL database
* Handle share submissions
* Payment processing module
* Support more algos (scrypt, scrypt-jane, quark)
* Statistics module
* Web frontend


Requirements
------------
* node v0.10+
* coin daemon
* PostgreSQL
* npm dependencies
  * [binpack](https://github.com/russellmcc/node-binpack)
  * [bignum](https://github.com/justmoon/node-bignum)
  * [buffertools] (https://github.com/bnoordhuis/node-buffertools)
  * [base58-native](https://github.com/gasteve/node-base58)


Credits
-------
* [Slush0](https://github.com/slush0/stratum-mining) - stratum protocol, documentation and original python code
* [viperaus](https://github.com/viperaus/stratum-mining) - scrypt adaptions to python code
* [ahmedbodi](https://github.com/ahmedbodi/stratum-mining) - more algo adaptions to python code
* [TheSeven](https://github.com/TheSeven) - being super knowledgeable & helpful on irc

Donations
---------
BTC: 1KRotMnQpxu3sePQnsVLRy3EraRFYfJQFR

License
-------
Released under the GNU General Public License v2

http://www.gnu.org/licenses/gpl-2.0.html
