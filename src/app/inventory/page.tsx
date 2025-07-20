
'use client';

import { File, ListFilter, MoreHorizontal, PlusCircle, Search } from 'lucide-react';
import Image from 'next/image';
import React, { useState, useMemo } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { AddProductDialog, EditProductDialog } from '@/components/inventory/product-dialogs';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const initialProducts = [
    { id: 'PROD001', name: 'Amul Butter 500g', sku: 'PROD001', category: 'Dairy', stock: 12, price: 250.00, status: 'Low Stock', img: 'https://placehold.co/40x40.png', dataAiHint: 'butter package'},
    { id: 'PROD002', name: 'Parle-G Biscuits', sku: 'PROD002', category: 'Snacks', stock: 3, price: 10.00, status: 'Out of Stock', img: 'https://placehold.co/40x40.png', dataAiHint: 'biscuit packet' },
    { id: 'PROD003', name: 'Aashirvaad Atta 10kg', sku: 'PROD003', category: 'Groceries', stock: 55, price: 450.00, status: 'In Stock', img: 'https://placehold.co/40x40.png', dataAiHint: 'flour bag' },
    { id: 'PROD004', name: 'Tata Salt 1kg', sku: 'PROD004', category: 'Groceries', stock: 120, price: 25.00, status: 'In Stock', img: 'https://placehold.co/40x40.png', dataAiHint: 'salt packet' },
    { id: 'PROD005', name: 'Maggi Noodles', sku: 'PROD005', category: 'Snacks', stock: 8, price: 12.00, status: 'Low Stock', img: 'https://placehold.co/40x40.png', dataAiHint: 'instant noodles' },
    { id: 'PROD006', name: 'Saffola Gold Oil 5L', sku: 'PROD006', category: 'Oils', stock: 30, price: 850.00, status: 'In Stock', img: 'https://placehold.co/40x40.png', dataAiHint: 'cooking oil' },
];

export type Product = typeof initialProducts[0];
export type ProductFormData = Omit<Product, 'status' | 'img' | 'dataAiHint' | 'id'>;

export default function InventoryPage() {
  const { toast } = useToast();
  const [products, setProducts] = useState(initialProducts);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const getStatus = (stock: number) => {
    if (stock === 0) return 'Out of Stock';
    if (stock < 10) return 'Low Stock';
    return 'In Stock';
  };

  const handleAddProduct = (newProductData: ProductFormData) => {
    const productToAdd: Product = {
      ...newProductData,
      id: `PROD${String(Math.random()).slice(2, 7)}`,
      status: getStatus(newProductData.stock),
      img: 'https://placehold.co/40x40.png',
      dataAiHint: 'new product'
    };
    setProducts(prev => [productToAdd, ...prev]);
    toast({
      title: 'Product Added',
      description: `${newProductData.name} has been added to your inventory.`,
    })
  };

  const handleEditProduct = (productId: string, updatedProductData: ProductFormData) => {
    setProducts(prev =>
      prev.map(p =>
        p.id === productId
          ? { ...p, ...updatedProductData, status: getStatus(updatedProductData.stock) }
          : p
      )
    );
    toast({
      title: "Product Updated",
      description: `${updatedProductData.name} has been successfully updated.`,
    });
    setEditingProduct(null);
  };

  const handleArchiveProduct = (productId: string) => {
    const productName = products.find(p => p.id === productId)?.name;
    setProducts(prev => prev.filter(p => p.id !== productId));
    toast({
      variant: "destructive",
      title: "Product Archived",
      description: `${productName} has been removed from your inventory.`,
    });
  };

  const exportToCSV = () => {
    const headers = ['Name', 'SKU', 'Category', 'Stock', 'Price', 'Status'];
    const rows = products.map(p => [p.name, p.sku, p.category, p.stock, `₹${p.price.toFixed(2)}`, p.status].join(','));
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "inventory.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast({
        title: "Export Successful",
        description: "Your inventory data has been exported.",
    });
  }

  const filteredProducts = useMemo(() => {
    return products
      .filter(product => {
        if (activeTab === 'all') return true;
        if (activeTab === 'in-stock') return product.status === 'In Stock';
        if (activeTab === 'low-stock') return product.status === 'Low Stock';
        if (activeTab === 'out-of-stock') return product.status === 'Out of Stock';
        return true;
      })
      .filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
  }, [products, searchQuery, activeTab]);


  return (
    <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 animate-fade-in">
      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="in-stock">In Stock</TabsTrigger>
            <TabsTrigger value="low-stock">Low Stock</TabsTrigger>
            <TabsTrigger value="out-of-stock">Out of Stock</TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <ListFilter className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>Category</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Price</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button size="sm" variant="outline" className="h-8 gap-1" onClick={exportToCSV}>
              <File className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Export</span>
            </Button>
            <AddProductDialog onAddProduct={handleAddProduct} />
          </div>
        </div>
        <TabsContent value={activeTab}>
          <Card>
            <CardHeader>
              <CardTitle>Inventory</CardTitle>
              <CardDescription>Manage your products and their stock levels.</CardDescription>
              <div className="relative mt-4">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search products..." 
                  className="pl-8" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Stock Level</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-3">
                          <Image src={product.img} alt={product.name} width={40} height={40} className="rounded-md" data-ai-hint={product.dataAiHint} />
                          <span>{product.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{product.sku}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={(product.stock / 150) * 100} className="w-24 h-2"/>
                          <span>{product.stock} units</span>
                        </div>
                      </TableCell>
                      <TableCell>₹{product.price.toFixed(2)}</TableCell>
                      <TableCell>
                        <Badge variant={product.status === 'In Stock' ? 'default' : product.status === 'Low Stock' ? 'secondary' : 'destructive'}
                          className={
                            product.status === 'In Stock' ? 'bg-green-500/20 text-green-700' :
                            product.status === 'Low Stock' ? 'bg-orange-500/20 text-orange-700' :
                            'bg-red-500/20 text-red-700'
                          }>
                          {product.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex gap-2 justify-end">
                            <Button variant="outline" size="sm" onClick={() => setEditingProduct(product)}>Edit</Button>
                            <Button variant="outline" size="sm" onClick={() => toast({ title: "Order Placed", description: `Re-stock order placed for ${product.name}.` })}>Re-stock</Button>
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button variant="destructive" size="sm">Archive</Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will permanently remove the product
                                        "{product.name}" from your inventory.
                                    </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => handleArchiveProduct(product.id)}>Archive</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <Pagination className="p-4 border-t">
              <PaginationContent>
                <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
                <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
                <PaginationItem><PaginationNext href="#" /></PaginationItem>
              </PaginationContent>
            </Pagination>
          </Card>
        </TabsContent>
      </Tabs>
      {editingProduct && (
        <EditProductDialog
            product={editingProduct}
            onEditProduct={handleEditProduct}
            onOpenChange={(isOpen) => !isOpen && setEditingProduct(null)}
        />
      )}
    </div>
  );
}

    

    