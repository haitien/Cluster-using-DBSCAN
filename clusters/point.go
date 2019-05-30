package clusters

// Point is longitue, latittude
type Point [2]float64

type PointList []Point

// Cluster is a result of DBScan
type Cluster struct {
	C      int
	Points []int
}

// sqDist returns squared (w/o sqrt & normalization) distance between two points
func (a *Point) sqDist(b *Point) float64 {
	return SquareDistanceSpherical(a, b)
}

func (a *Point) LessEq(b *Point) bool {
	return a[0] <= b[0] && a[1] <= b[1]
}

func (a *Point) GreaterEq(b *Point) bool {
	return a[0] >= b[0] && a[1] >= b[1]
}

// CentroidAndBounds calculates center and cluster bounds
func (c *Cluster) CentroidAndBounds(points PointList) (center, min, max Point) {
	if len(c.Points) == 0 {
		panic("empty cluster")
	}

	min = Point{180.0, 90.0}
	max = Point{-180.0, -90.0}

	for _, i := range c.Points {
		pt := points[i]

		for j := range pt {
			center[j] += pt[j]

			if pt[j] < min[j] {
				min[j] = pt[j]
			}
			if pt[j] > max[j] {
				max[j] = pt[j]
			}
		}
	}

	for j := range center {
		center[j] /= float64(len(c.Points))
	}

	return
}

// Inside checks if (innerMin, innerMax) rectangle is inside (outerMin, outMax) rectangle
func Inside(innerMin, innerMax, outerMin, outerMax *Point) bool {
	return innerMin.GreaterEq(outerMin) && innerMax.LessEq(outerMax)
}
