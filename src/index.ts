
import { StickerPackage } from './package';
import { SearchSticker } from './search';
import { Analytics } from './analytics';
import { Curation } from './curation';
import { Download } from './download';
import { Gift } from './gift';
import { Init } from './init';
import { Mysticker } from './mysticker';
import { Base } from './base';


class Stipop extends Base {

}

interface Stipop extends StickerPackage, SearchSticker, Analytics, Curation, Download, Gift, Init, Mysticker {

}

applyMixins(Stipop, [StickerPackage, SearchSticker, Analytics, Curation, Download, Gift, Init, Mysticker]);

function applyMixins(derivedCtor: any, constructors: any[]) {
    constructors.forEach((baseCtor) => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
        Object.defineProperty(
          derivedCtor.prototype,
          name,
          Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
            Object.create(null)
        );
      });
    });
}

module.exports = Stipop;