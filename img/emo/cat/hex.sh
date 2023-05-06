
for i in *.png
do
    se=$(echo $i|sed s/.png//g|sed s/f/F/g)
    #echo $se
    #up=$(echo $se|sed s/[a-z]/[A-Z]/g)
up=$(echo $se|tr "[:lower:]" "[:upper:]" )
#    echo $up
res=$(echo "ibase=10; obase=16; $up" | bc)
echo $res
mv $i $res.png
done

# echo $res

