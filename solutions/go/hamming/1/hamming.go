package hamming
import(
    "strings"
    "errors"
)
func Distance(a, b string) (int, error) {
	if len(a)!=len(b) {
        return 0, errors.New("strings must be equal length")
    }
    arrA:=strings.Split(a, "")
    arrB:=strings.Split(b,"")
    count := 0
    for i := 0; i < len(arrA); i++ {
        if(arrA[i] != arrB[i]){
            count++
        }
    }

    return count,nil;
}
