/**
 * Filtro compartido para las fotografías del Consejo Directivo.
 *
 * Desatura únicamente las zonas oscuras de la imagen (ternos y sacos), mediante
 * una máscara de luminancia. Los rostros, el fondo y las fotografías sin terno
 * conservan su color original.
 */
export default function PortraitFilterDefs() {
  return (
    <svg
      width="0"
      height="0"
      aria-hidden="true"
      focusable="false"
      style={{ position: "absolute" }}
    >
      <defs>
        <filter id="portrait-suit-tone" colorInterpolationFilters="sRGB">
          <feColorMatrix
            in="SourceGraphic"
            type="saturate"
            values="0.35"
            result="desaturated"
          />
          <feColorMatrix
            in="SourceGraphic"
            type="saturate"
            values="0"
            result="grayscale"
          />
          <feColorMatrix
            in="grayscale"
            type="matrix"
            values="0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0 0
                    -0.3333 -0.3333 -0.3333 0 1"
            result="darkMask"
          />
          <feComponentTransfer in="darkMask" result="clothingMask">
            <feFuncA type="table" tableValues="0 0 0.12 0.55 0.95" />
          </feComponentTransfer>
          <feComposite
            in="desaturated"
            in2="clothingMask"
            operator="in"
            result="maskedClothing"
          />
          <feComposite
            in="maskedClothing"
            in2="SourceGraphic"
            operator="over"
            result="base"
          />
          <feFlood
            floodColor="#1B3A63"
            floodOpacity="0.25"
            result="suitBlue"
          />
          <feComposite
            in="suitBlue"
            in2="clothingMask"
            operator="in"
            result="maskedSuitBlue"
          />
          <feComposite
            in="maskedSuitBlue"
            in2="base"
            operator="over"
            result="toned"
          />
        </filter>

        <filter id="portrait-suit-deep" colorInterpolationFilters="sRGB">
          <feColorMatrix
            in="SourceGraphic"
            type="saturate"
            values="0.35"
            result="desaturated"
          />
          <feColorMatrix
            in="SourceGraphic"
            type="saturate"
            values="0"
            result="grayscale"
          />
          <feColorMatrix
            in="grayscale"
            type="matrix"
            values="0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0 0
                    -0.3333 -0.3333 -0.3333 0 1"
            result="darkMask"
          />
          <feComponentTransfer in="darkMask" result="clothingMask">
            <feFuncA type="table" tableValues="0 0 0.12 0.55 0.95" />
          </feComponentTransfer>
          <feComposite
            in="desaturated"
            in2="clothingMask"
            operator="in"
            result="maskedClothing"
          />
          <feComposite
            in="maskedClothing"
            in2="SourceGraphic"
            operator="over"
            result="base"
          />
          <feFlood
            floodColor="#1B3A63"
            floodOpacity="0.25"
            result="suitBlue"
          />
          <feComposite
            in="suitBlue"
            in2="clothingMask"
            operator="in"
            result="maskedSuitBlue"
          />
          <feComposite
            in="maskedSuitBlue"
            in2="base"
            operator="over"
            result="toned"
          />
          <feComponentTransfer in="toned" result="contrastToned">
            <feFuncR type="linear" slope="1.25" intercept="-0.08" />
            <feFuncG type="linear" slope="1.25" intercept="-0.08" />
            <feFuncB type="linear" slope="1.25" intercept="-0.08" />
          </feComponentTransfer>
          <feComposite
            in="contrastToned"
            in2="clothingMask"
            operator="in"
            result="maskedContrast"
          />
          <feComposite
            in="maskedContrast"
            in2="toned"
            operator="over"
            result="contrasted"
          />
          <feFlood
            floodColor="#06152F"
            floodOpacity="0.3"
            result="deepShade"
          />
          <feComposite
            in="deepShade"
            in2="clothingMask"
            operator="in"
            result="maskedDeepShade"
          />
          <feComposite
            in="maskedDeepShade"
            in2="contrasted"
            operator="over"
          />
        </filter>

        <filter id="portrait-suit-deepest" colorInterpolationFilters="sRGB">
          <feColorMatrix
            in="SourceGraphic"
            type="saturate"
            values="0.35"
            result="desaturated"
          />
          <feColorMatrix
            in="SourceGraphic"
            type="saturate"
            values="0"
            result="grayscale"
          />
          <feColorMatrix
            in="grayscale"
            type="matrix"
            values="0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0 0
                    -0.3333 -0.3333 -0.3333 0 1"
            result="darkMask"
          />
          <feComponentTransfer in="darkMask" result="clothingMask">
            <feFuncA type="table" tableValues="0 0 0.12 0.55 0.95" />
          </feComponentTransfer>
          <feComposite
            in="desaturated"
            in2="clothingMask"
            operator="in"
            result="maskedClothing"
          />
          <feComposite
            in="maskedClothing"
            in2="SourceGraphic"
            operator="over"
            result="base"
          />
          <feFlood
            floodColor="#1B3A63"
            floodOpacity="0.25"
            result="suitBlue"
          />
          <feComposite
            in="suitBlue"
            in2="clothingMask"
            operator="in"
            result="maskedSuitBlue"
          />
          <feComposite
            in="maskedSuitBlue"
            in2="base"
            operator="over"
            result="toned"
          />
          <feComponentTransfer in="toned" result="contrastToned">
            <feFuncR type="linear" slope="1.35" intercept="-0.12" />
            <feFuncG type="linear" slope="1.35" intercept="-0.12" />
            <feFuncB type="linear" slope="1.35" intercept="-0.12" />
          </feComponentTransfer>
          <feComposite
            in="contrastToned"
            in2="clothingMask"
            operator="in"
            result="maskedContrast"
          />
          <feComposite
            in="maskedContrast"
            in2="toned"
            operator="over"
            result="contrasted"
          />
          <feFlood
            floodColor="#06152F"
            floodOpacity="0.42"
            result="deepShade"
          />
          <feComposite
            in="deepShade"
            in2="clothingMask"
            operator="in"
            result="maskedDeepShade"
          />
          <feComposite
            in="maskedDeepShade"
            in2="contrasted"
            operator="over"
          />
        </filter>
      </defs>
    </svg>
  );
}
