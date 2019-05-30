package clusters

import (
	"math"
)

const (
	kDegreeRadian = math.Pi / 180.0
	kRadiusEarth = 6371.0
)

// http://forum.devmaster.net/t/fast-and-accurate-sine-cosine/9648
// https://gitlab.logzero.in/arelangi/d3/commit/c5450fa62aecf68421dfb1e0df833d5c17dd6d3f
func calFastSin(x float64) float64 {
	const (
		B = 4 / math.Pi
		C = -4 / (math.Pi * math.Pi)
		P = 0.225
	)

	if x > math.Pi || x < -math.Pi {
		panic("out of range")
	}

	y := B*x + C*x*math.Abs(x)
	return P*(y*math.Abs(y)-y) + y
}

func calFastCos(x float64) float64 {
	x += math.Pi / 2.0
	if x > math.Pi {
		x -= 2 * math.Pi
	}
	return calFastSin(x)
}

// SquareDistanceSpherical calculates spherical distance with fast cosine
// without sqrt and normalization to Earth radius/radians
// To get real distance in km, take sqrt and multiply result by EarthRadius*Degree2Radian
// In this library eps (distance) is adjusted so that we don't need
// to do sqrt and multiplication
func SquareDistanceSpherical(p1, p2 *Point) float64 {
	v1 := (p1[1] - p2[1])
	v2 := (p1[0] - p2[0]) * calFastCos((p1[1] + p2[1]) / 2.0 * kDegreeRadian)
	return v1*v1 + v2*v2
}
