// Set the precision for data types used in this shader
		precision highp float;
		precision highp int;

		uniform vec3 color;

		varying float noise;
		varying vec2 vUv;

		void main() {
		    vec3 color = vec3( vUv * ( 3. - 1. * noise ) , 0.3*( 3. - 1. * noise ) ) ;
    		gl_FragColor = vec4( sin(color.rgb), 1.0 );
		}